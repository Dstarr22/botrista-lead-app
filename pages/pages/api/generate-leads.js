export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { location, venueType } = req.body;

  // Dummy response for now — replace with real lead fetching later
  const leads = [
    {
      name: 'Jamie Garcia',
      title: 'Dining Manager',
      email: 'jamie.garcia@example.com',
      phone: '555-123-4567',
      establishment: 'Omings Kitchen',
      address: '123 Thai St, Las Vegas, NV',
      provider: 'Independent',
      priority: 'High'
    }
  ];

  res.status(200).json({ leads });
}
