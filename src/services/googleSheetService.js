
// This service simulates fetching data from a Google Sheet.
// In a real application, this would fetch from a Google Sheets API endpoint or a backend proxy.

export const fetchDashboardData = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Return mock data that "updates" slightly each time to simulate live activity
    const baseCalls = 15400;
    const baseMeetings = 420;
    const baseRevenue = 125000;

    // Add some random variance to simulate live updates
    const randomCalls = Math.floor(Math.random() * 50);
    const randomMeetings = Math.floor(Math.random() * 5);
    const randomRevenue = Math.floor(Math.random() * 5000);

    return {
        metrics: {
            totalCalls: baseCalls + randomCalls,
            meetingsBooked: baseMeetings + randomMeetings,
            revenueGenerated: baseRevenue + randomRevenue,
            activeCampaigns: 8,
            pipelineValue: 3500000 + (randomRevenue * 10),
        },
        charts: {
            // Mock 7-day data
            overview: [
                { name: 'Mon', calls: 800, meetings: 12 },
                { name: 'Tue', calls: 950, meetings: 15 },
                { name: 'Wed', calls: 1100, meetings: 22 },
                { name: 'Thu', calls: 1050, meetings: 18 },
                { name: 'Fri', calls: 1300, meetings: 28 },
                { name: 'Sat', calls: 400, meetings: 5 },
                { name: 'Sun', calls: 300, meetings: 3 },
            ]
        },
        recentActivity: [
            { id: 1, type: 'meeting', message: 'Meeting booked with TechFlow Systems', time: '2 min ago', value: '$12,000' },
            { id: 2, type: 'call', message: 'Positive sentiment detected: Global Corp', time: '5 min ago', value: 'High Intent' },
            { id: 3, type: 'email', message: 'Follow-up sequence completed', time: '12 min ago', value: '450 Leads' },
            { id: 4, type: 'proposal', message: 'Proposal sent to Nexus Inc', time: '1 hour ago', value: '$45,000' },
        ]
    };
};
