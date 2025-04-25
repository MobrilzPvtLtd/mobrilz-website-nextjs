import { getStrapiURL } from '../../utils/api';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);

    const formData = {
      data: {
        Inquirytype:'Contact Us Page',
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone?.replace(/[^0-9+]/g, '') || null,
        inquiryType: req.body.inquiryType.toLowerCase(),
        message: req.body.message,
        wantsAppointment: req.body.wantsAppointment || null,
        appointmentDate: req.body.appointmentDate || null,
        appointmentTime: req.body.appointmentTime || null,
        meetingType: req.body.meetingType || null
      }
    };

    console.log('Sending to Strapi:', formData);

    const response = await fetch(`${getStrapiURL('/api/form-messages')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Strapi Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorData
      });
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorData}`);
    }

    const data = await response.json();
    console.log('Strapi Success Response:', data);
    return res.status(200).json(data);

  } catch (error) {
    console.error('Form submission error:', {
      message: error.message,
      stack: error.stack
    });
    return res.status(500).json({ 
      message: 'Error submitting form',
      error: error.message,
      details: error.stack
    });
  }
}