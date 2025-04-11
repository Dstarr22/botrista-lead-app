export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leads = [
    {
      name: 'Jamie Tran',
      title: 'Executive Chef',
      email: 'jamie@blacksheep.vegas',
      phone: '(702) 123-4567',
      establishment: 'The Black Sheep',
      address: '8680 W Warm Springs Rd, Las Vegas, NV 89148',
      provider: 'Independent',
      priority: 'High'
    }
  ];

  res.status(200).json({ leads });
}
