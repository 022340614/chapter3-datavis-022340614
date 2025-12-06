// 数据可视化图表配置 - 基于第3章示例
document.addEventListener('DOMContentLoaded', function() {
    // 1. 正弦余弦曲线
    const sinCosCtx = document.getElementById('sinCosChart').getContext('2d');
    const xData = [];
    for (let i = -Math.PI; i <= Math.PI; i += 0.1) {
        xData.push(i);
    }
    
    new Chart(sinCosCtx, {
        type: 'line',
        data: {
            labels: xData.map(x => {
                if (x === -Math.PI) return '-π';
                if (x === -Math.PI/2) return '-π/2';
                if (x === 0) return '0';
                if (x === Math.PI/2) return 'π/2';
                if (x === Math.PI) return 'π';
                return '';
            }),
            datasets: [{
                label: '正弦曲线',
                data: xData.map(x => Math.sin(x)),
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: '余弦曲线',
                data: xData.map(x => Math.cos(x)),
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'x轴'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'y轴'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '正弦曲线和余弦曲线',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });

    // 2. 电影票房排行
    const filmRankCtx = document.getElementById('filmRankChart').getContext('2d');
    const filmLabels = [
        "哪吒之魔童降世", "流浪地球", "复仇者联盟4:终局之战", 
        "疯狂的外星人", "飞驰人生", "烈火英雄", "蜘蛛侠:英雄远征", 
        "速度与激情:特别行动", "扫毒2天地对决", "大黄蜂","惊奇队长", 
        "比悲伤更悲伤的故事", "哥斯拉2:怪兽之王", "阿丽塔:战斗天使", 
        "银河补习班"
    ];
    const filmData = [48.57, 46.18, 42.05, 21.83, 17.03, 16.70, 14.01, 13.84, 
                      12.85, 11.38, 10.25, 9.46, 9.27, 8.88, 8.64];
    
    new Chart(filmRankCtx, {
        type: 'bar',
        data: {
            labels: filmLabels,
            datasets: [{
                label: '票房(亿元)',
                data: filmData,
                backgroundColor: 'rgba(255, 165, 0, 0.8)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '总票房(亿元)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '电影名称'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // 3. 支付宝账单
    const alipayCtx = document.getElementById('alipayBillChart').getContext('2d');
    const alipayLabels = ['购物', '人情往来', '餐饮美食', '通信物流', '生活日用', '交通出行', '休闲娱乐', '其他'];
    const alipayData = [800/3000, 100/3000, 1000/3000, 200/3000, 300/3000, 200/3000, 200/3000, 200/3000];
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'];
    
    new Chart(alipayCtx, {
        type: 'pie',
        data: {
            labels: alipayLabels,
            datasets: [{
                data: alipayData,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '支付宝月账单报告',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const percentage = (value * 100).toFixed(1);
                            return `${label}: ${percentage}%`;
                        }
                    }
                }
            }
        }
    });

    // 4. 汽车制动距离
    const carSpeedCtx = document.getElementById('carSpeedChart').getContext('2d');
    const speedData = Array.from({length: 20}, (_, i) => (i + 1) * 10);
    const distanceData = [0.5, 2.0, 4.4, 7.9, 12.3, 17.7, 24.1, 31.5, 39.9, 49.2,
                          59.5, 70.8, 83.1, 96.4, 110.7, 126.0, 142.2, 159.4, 177.6, 196.8];
    
    new Chart(carSpeedCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '制动距离',
                data: speedData.map((speed, index) => ({
                    x: speed,
                    y: distanceData[index]
                })),
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '速度(km/h)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '制动距离(m)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `速度: ${context.parsed.x}km/h, 制动距离: ${context.parsed.y}m`;
                        }
                    }
                }
            }
        }
    });

    // 5. 英语成绩评估
    const englishScoreCtx = document.getElementById('englishScoreChart').getContext('2d');
    const classLabels = ['高二1班', '高二2班', '高二3班', '高二4班', '高二5班', '高二6班'];
    const menScores = [90.5, 89.5, 88.7, 88.5, 85.2, 86.6];
    const womenScores = [92.7, 87.0, 90.5, 85.0, 89.5, 89.8];
    
    new Chart(englishScoreCtx, {
        type: 'bar',
        data: {
            labels: classLabels,
            datasets: [{
                label: '男生平均成绩',
                data: menScores,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: '女生平均成绩',
                data: womenScores,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '分数'
                    },
                    min: 80,
                    max: 100,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 88.5,
                            yMax: 88.5,
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: '全体平均成绩: 88.5分',
                                position: 'end'
                            }
                        }
                    }
                }
            }
        }
    });

    // 6. 阿里GMV数据
    const alibabaGmvCtx = document.getElementById('alibabaGmvChart').getContext('2d');
    const yearLabels = ["FY2013", "FY2014", "FY2015", "FY2016", "FY2017", "FY2018", "FY2019"];
    const gmvData = [10770, 16780, 24440, 30920, 37670, 48200, 57270];
    
    new Chart(alibabaGmvCtx, {
        type: 'bar',
        data: {
            labels: yearLabels,
            datasets: [{
                label: 'GMV(亿元)',
                data: gmvData,
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'GMV(亿元)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `GMV: ${context.parsed.y}亿元`;
                        }
                    }
                }
            }
        }
    });

    // 7. 面包配料比例
    const breadIngredientCtx = document.getElementById('breadIngredientChart').getContext('2d');
    const ingredientLabels = ['面粉', '全麦粉', '酵母', '苹果酱', '鸡蛋', '黄油', '盐', '白糖'];
    const ingredientWeights = [250, 150, 4, 250, 50, 30, 4, 20];
    const totalWeight = ingredientWeights.reduce((a, b) => a + b, 0);
    const ingredientPercentages = ingredientWeights.map(w => (w / totalWeight * 100).toFixed(1));
    
    new Chart(breadIngredientCtx, {
        type: 'pie',
        data: {
            labels: ingredientLabels,
            datasets: [{
                data: ingredientWeights,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
                    '#9966FF', '#FF9F40', '#8AC926', '#1982C4'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const percentage = ((value / totalWeight) * 100).toFixed(1);
                            return `${label}: ${value}g (${percentage}%)`;
                        }
                    }
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });
});