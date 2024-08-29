import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Body = () =>{
    return(
        <div>
            <div className="container-fluid whole">
                <div className="row">
                    <div className="col-12">
                        <div className="body-title">
                            <h1>Welcome To Agrasain Boys' School, Liluah, Kolkata</h1><hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12 col-md-3">
                        <div className="card1">  
                            <div className="card1-left">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total Students
                                </div>
                                <div className="num">
                                    2500
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#F94C66'}}>
                            <div className="card1-left">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total Teacher
                                </div>
                                <div className="num">
                                    200
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#F15412'}}>
                            <div className="card1-left">
                                <i className="fas fa-male"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total Staff
                                </div>
                                <div className="num">
                                    200
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#5FD068'}}>
                            <div className="card1-left">
                                <i className="fas fa-bus"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total Transport
                                </div>
                                <div className="num">
                                    50
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#F32424'}}>  
                            <div className="card1-left">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total User
                                </div>
                                <div className="num">
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#4E944F'}}>
                            <div className="card1-left">
                                <i className="fas fa-book"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Today's Admission
                                </div>
                                <div className="num">
                                    200
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#733C3C'}}>
                            <div className="card1-left">
                                <i class="fas fa-smile"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Happy Student
                                </div>
                                <div className="num">
                                    2000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1" style={{backgroundColor:'#2FA4FF'}}>
                            <div className="card1-left">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="card1-right">
                                <div className="num-title">
                                    Total Likes
                                </div>
                                <div className="num">
                                    50K
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="chart-area">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body