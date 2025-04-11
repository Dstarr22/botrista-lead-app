import { useState } from 'react';

export default function LeadGeneratorApp() {
  const [location, setLocation] = useState('');
  const [venueType, setVenueType] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateLeads = async () => {
    setLoading(true);
    const response = await fetch('/api/generate-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location, venueType })
    });
    const data = await response.json();
    setLeads(data.leads || []);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Botrista Lead Generator</h1>
      <input
        style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        placeholder="Enter city or state (e.g. Las Vegas)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        placeholder="Enter venue type (e.g. sushi, schools, hospitals)"
        value={venueType}
        onChange={(e) => setVenueType(e.target.value)}
      />
      <button onClick={generateLeads} disabled={loading} style={{ padding: '10px 20px' }}>
        {loading ? 'Generating...' : 'Generate Leads'}
      </button>

      {leads.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Results:</h2>
          {leads.map((lead, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <p><strong>Establishment:</strong> {lead.establishment}</p>
              <p><strong>Contact:</strong> {lead.name} ({lead.title})</p>
              <p><strong>Email:</strong> {lead.email || 'N/A'}</p>
              <p><strong>Phone:</strong> {lead.phone || 'N/A'}</p>
              <p><strong>Address:</strong> {lead.address}</p>
              <p><strong>Provider:</strong> {lead.provider}</p>
              <p><strong>Priority:</strong> {lead.priority}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
