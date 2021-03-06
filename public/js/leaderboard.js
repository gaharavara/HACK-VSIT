let institutes={
    1:{
        name:'IIT D',
        sewage: 10000,
        education: 50,
        hunger:1000,
        dormitory:50,
        health:20
    },
    2:{
        name:'GTBIT',
        sewage: 1000,
        education: 2,
        hunger:10,
        dormitory:4,
        health:7
    },
    3:{
        name:'BITS',
        sewage: 7000,
        education: 10,
        hunger:80,
        dormitory:100,
        health:8
    }
}

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IIT D', 'GTBIT', 'BITS'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    `rgba(255, 99, 132, 0.2)`,
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });