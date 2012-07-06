var cai = cai || {};  

cai.MockDemand = [

	// Location 1
	{"locationCode": "1", "materialCode": "Sand",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 600,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 20000,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 1950,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5680,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8590,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6547,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1700,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 17000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 17500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 25000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 7500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 18500,
	                    "uom": "lbs"
	                }
	            ]
	        }
	    ]
	},
    
	{"locationCode": "1", "materialCode": "Rock",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 21500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1700,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1200,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 600,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 850,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1890,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 350,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 18500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 10500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 550,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 19500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 28000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1700,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 8800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 19750,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	},

	{"locationCode": "1", "materialCode": "Cement",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 200,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 750,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 950,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 4250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 985,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 795,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 4585,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 195,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 195,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 875,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 125,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 15950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 125,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9865,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 295,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12095,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9560,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 875,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 3250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 15650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	},
    
	{"locationCode": "1", "materialCode": "Flyash",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 100,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 300,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 550,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 50,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 385,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 295,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2585,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 95,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 1250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 95,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 375,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 65,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 65,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5295,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 160,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 450,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3285,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 1650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	},


	// Location 2
	{"locationCode": "2", "materialCode": "RSand",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 600,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 20000,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 1950,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5680,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8590,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6547,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1700,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 17000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 17500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 25000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 7500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 18500,
	                    "uom": "lbs"
	                }
	            ]
	        }
	    ]
	},
    
	{"locationCode": "2", "materialCode": "Gravel",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 21500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 1700,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1200,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 600,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 850,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 1890,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 350,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 18500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 10500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 550,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 19500,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 28000,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 1700,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 13650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 8800,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 19750,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	},

	{"locationCode": "2", "materialCode": "Stone",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 200,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 750,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 900,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 950,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 4250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 985,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 795,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 4585,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 195,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 195,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 875,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 125,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 15950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 125,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9865,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 295,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12095,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 12850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9560,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 875,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6750,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 3250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 15650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	},
    
	{"locationCode": "2", "materialCode": "PCem",
	    "timeBuckets": [
	        {
	            "startTime": "2012-07-04T12:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 6500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will-call",
	                    "amount": 100,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7500,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 300,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T12:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 550,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 50,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2250,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 385,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 295,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T13:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 2585,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 95,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 1250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 95,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "weather permitting",
	                    "amount": 250,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 375,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 65,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 11950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3800,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 65,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T14:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5295,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "hold",
	                    "amount": 160,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 8850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:15:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 7950,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:30:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 5650,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "will call",
	                    "amount": 450,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T15:45:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 3285,
	                    "uom": "lbs"
	                },
	                {
	                    "type": "review",
	                    "amount": 1650,
	                    "uom": "lbs"
	                }
	            ]
	        },
	        {
	            "startTime": "2012-07-04T16:00:00Z",
	            "demands": [
	                {
	                    "type": "normal",
	                    "amount": 9850,
	                    "uom": "lbs"
	                }
	            ]
	        },
	    ]
	}
];
