import { getStrapiURL } from '../../utils/api';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
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

    const response = await fetch(`${getStrapiURL('/api/form-messages')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ 
      message: 'Error submitting form',
      error: error.message
    });
  }
}