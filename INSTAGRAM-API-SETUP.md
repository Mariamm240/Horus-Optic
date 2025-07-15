# Instagram API Setup Instructions

## Overview
This project integrates with Instagram's Graph API to display real-time stories and posts from your Instagram account (@horus_optic_). The integration automatically refreshes content every 5-10 minutes to show the latest posts and stories.

## Prerequisites
1. Instagram Business or Creator Account
2. Facebook Page connected to your Instagram account
3. Facebook Developer Account

## Setup Steps

### 1. Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Business" → "Continue"
3. Enter app details:
   - App Name: "Horus Optic Instagram Integration"
   - Contact Email: your email
4. Click "Create App ID"

### 2. Add Instagram Basic Display
1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Create New App ID" if prompted

### 3. Configure Instagram Basic Display
1. Go to Instagram Basic Display → Basic Display
2. Add your website URL in "Valid OAuth Redirect URIs":
   - For development: `http://localhost:5173`
   - For production: `https://yourdomain.com`

### 4. Get Access Token
1. Go to Instagram Basic Display → Basic Display
2. Click "Add or Remove Instagram Testers"
3. Add your Instagram account as a tester
4. Accept the invitation in your Instagram app
5. Generate Access Token:
   - Click "Generate Token" next to your test user
   - Copy the generated token

### 5. Get Instagram User ID
1. Use the Graph API Explorer: `https://developers.facebook.com/tools/explorer/`
2. Select your app from the dropdown
3. Paste your access token
4. Make a GET request to: `me?fields=id,username`
5. Copy the `id` from the response

### 6. Environment Variables
Create a `.env` file in your project root with the following variables:

```env
# Instagram API Configuration
VITE_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
VITE_INSTAGRAM_USER_ID=your_user_id_here
```

### 7. Production Considerations

#### Access Token Longevity
- Basic access tokens expire after 1 hour
- For production, implement token refresh or use long-lived tokens
- Long-lived tokens last 60 days and can be refreshed

#### Rate Limits
- 200 requests per hour per user
- The app automatically handles rate limiting with error fallbacks

#### Content Types
- The integration fetches:
  - Recent posts (images, videos, carousels)
  - Stories (if available through API)
  - Basic engagement metrics

## Testing the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Testimonials page
3. Click on the "Instagram" tab
4. You should see:
   - Real Instagram stories (if available)
   - Recent posts from @horus_optic_
   - Auto-refresh functionality
   - Fallback content if API fails

## Troubleshooting

### Common Issues

1. **"Access token expired" error**
   - Generate a new access token from Facebook Developer Console
   - Update your `.env` file

2. **"User not found" error**
   - Verify your Instagram User ID is correct
   - Ensure the account is public or the token has proper permissions

3. **No content showing**
   - Check browser console for errors
   - Verify environment variables are loaded
   - Ensure your Instagram account has recent posts

4. **CORS errors**
   - Instagram API requests are made server-side via proxy
   - Check your domain is whitelisted in Facebook app settings

### API Response Format
The integration expects Instagram API responses in this format:

```json
{
  "data": [
    {
      "id": "post_id",
      "caption": "Post caption",
      "media_url": "image_url",
      "media_type": "IMAGE|VIDEO|CAROUSEL_ALBUM",
      "timestamp": "2024-01-01T00:00:00+0000",
      "like_count": 100,
      "comments_count": 10
    }
  ]
}
```

## Support
For additional help with Instagram API integration, refer to:
- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook for Developers](https://developers.facebook.com/)
