import { getStrapiURL } from '../../utils/api';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch(`${getStrapiURL('/api/form-messages')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization if required
        // 'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
      },
      body: JSON.stringify({
        data: {
          name: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone || null,
          inquiryType: req.body.inquiryType,
          message: req.body.message,
          appointmentRequested: req.body.wantsAppointment,
          appointmentDate: req.body.appointmentDate || null,
          appointmentTime: req.body.appointmentTime || null,
          meetingType: req.body.meetingType || null,
          status: 'new',
          source: 'website'
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      message: 'Error submitting form',
      error: error.message 
    });
  }
}