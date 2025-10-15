# EmailJS Setup Instructions

To enable email functionality in your portfolio, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Message from {{from_name}} - Portfolio Contact

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   - `serviceId`: Your Service ID
   - `templateId`: Your Template ID  
   - `publicKey`: Your Public Key

## 6. Test Email Functionality
1. Run your portfolio: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (mohamedatya563@gmail.com)

## Troubleshooting
- Make sure all IDs and keys are correct
- Check browser console for error messages
- Verify your email service is active in EmailJS
- Test with different email addresses

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio contact forms
- Upgrade if you need more emails
