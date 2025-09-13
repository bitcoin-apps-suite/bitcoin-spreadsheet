const express = require('express');
const cors = require('cors');
const { HandCashConnect } = require('@handcash/handcash-connect');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3002;

// HandCash profile endpoint
app.post('/api/handcash-profile', async (req, res) => {
  try {
    const { authToken } = req.body;
    
    if (!authToken) {
      return res.status(400).json({ error: 'No auth token provided' });
    }

    console.log('Fetching profile for token:', authToken.substring(0, 20) + '...');

    // Use HandCash Connect SDK to get profile
    const handcashConnect = new HandCashConnect({
      appId: process.env.HANDCASH_APP_ID || '68c532b2a0b054ff147f4579'
    });

    const account = handcashConnect.getAccountFromAuthToken(authToken);
    const profile = await account.profile.getCurrentProfile();

    console.log('Profile fetched:', profile);

    res.json({
      profile: {
        handle: profile.publicProfile?.handle || profile.handle,
        paymail: profile.publicProfile?.paymail || profile.paymail,
        displayName: profile.publicProfile?.displayName || profile.displayName,
        avatarUrl: profile.publicProfile?.avatarUrl || profile.avatarUrl,
        publicKey: profile.publicProfile?.id || profile.id
      }
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`HandCash profile server running on port ${PORT}`);
});