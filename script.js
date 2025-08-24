document.addEventListener('DOMContentLoaded', () => {
    // KPI Chart (Card 1)
    new Chart(document.getElementById('kpiChart'), {
        type: 'line',
        data: {
            labels: ['Mar 2022', 'Jun 2022', 'Aug 2022', 'Dec 2022'],
            datasets: [
                {
                    label: 'Client Retention (%)',
                    data: [0, 0, 65, 80],
                    borderColor: '#28A745',
                    backgroundColor: '#28A745',
                    fill: false,
                    pointBackgroundColor: ['#28A745', '#28A745', '#28A745', '#28A745'],
                    pointRadius: [5, 5, 5, 5],
                    pointHoverRadius: 7
                },
                {
                    label: 'Cost Reduction (%)',
                    data: [0, 0, 12.5, 30],
                    borderColor: '#DC3545',
                    backgroundColor: '#DC3545',
                    fill: false,
                    pointBackgroundColor: ['#DC3545', '#DC3545', '#DC3545', '#DC3545'],
                    pointRadius: [5, 5, 5, 5],
                    pointHoverRadius: 7
                },
                {
                    label: 'Average Check ($)',
                    data: [0, 95, 110, 150],
                    borderColor: '#007BFF',
                    backgroundColor: '#007BFF',
                    fill: false,
                    pointBackgroundColor: ['#007BFF', '#007BFF', '#007BFF', '#007BFF'],
                    pointRadius: [5, 5, 5, 5],
                    pointHoverRadius: 7
                },
                {
                    label: 'My Involvement (%)',
                    data: [95, 90, 75, 60],
                    borderColor: '#FFC107',
                    backgroundColor: '#FFC107',
                    fill: false,
                    pointBackgroundColor: ['#FFC107', '#FFC107', '#FFC107', '#FFC107'],
                    pointRadius: [5, 5, 5, 5],
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            label += context.parsed.y;
                            if (context.datasetIndex === 0 && context.dataIndex === 0) {
                                return 'Pre-Launch Planning';
                            } else if (context.datasetIndex === 0 && context.dataIndex === 2) {
                                return '65% Client Retention Post-Launch';
                            } else if (context.datasetIndex === 0 && context.dataIndex === 3) {
                                return '80% Client Retention at 6 Months';
                            } else if (context.datasetIndex === 1 && context.dataIndex === 3) {
                                return '30% Cost Reduction at 6 Months';
                            } else if (context.datasetIndex === 2 && context.dataIndex === 3) {
                                return 'Average Check: $150 at 6 Months';
                            } else if (context.datasetIndex === 3 && context.dataIndex === 0) {
                                return '95% Involvement at Launch';
                            } else if (context.datasetIndex === 3 && context.dataIndex === 3) {
                                return '60% Involvement by 6 Months - Reduced via Delegation and Process Optimization';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Timeline (9 Months)' },
                    ticks: { callback: function(value, index) { return ['Mar 2022', 'Jun 2022', 'Aug 2022', 'Dec 2022'][index]; } }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Metrics' }
                }
            }
        }
    });
});
