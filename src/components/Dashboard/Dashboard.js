import React, {useEffect} from "react";
import { Container, Grow, Grid, Paper } from "@mui/material";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from "../../actions/tasks.js";
import useStyles from "./styles.js";

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result?.rows[0]?.users_id;
  const tasks = useSelector((state) => state?.tasks);

  useEffect(() => {
    dispatch(getTasks(userId));
  }, [dispatch, userId]);

  const tasksProjectManager1 = tasks?.filter(task=>{
    const tpm1 = task.project_manager === 2;
        return tpm1;
    });
  const tasksProjectManager1Backlogs = tasksProjectManager1?.filter(task=>{        
    const date = new Date(task.end_date)
    const timestamp = date.getTime()
      return timestamp < Date.now()
    });
  const tasksProjectManager1BacklogsCritical = tasksProjectManager1Backlogs?.filter(task=>{        
    const tpm1bc = task.priority === 1;
      return tpm1bc;
    });
  const tasksProjectManager1BacklogsHigh = tasksProjectManager1Backlogs?.filter(task=>{        
    const tpm1bc = task.priority === 2;
      return tpm1bc;
    });
  const tasksProjectManager1BacklogsMedium = tasksProjectManager1Backlogs?.filter(task=>{        
    const tpm1bc = task.priority === 3;
      return tpm1bc;
    });
  const tasksProjectManager1BacklogsLow = tasksProjectManager1Backlogs?.filter(task=>{        
    const tpm1bc = task.priority === 4;
      return tpm1bc;
    });
  const tasksProjectManager1Active = tasksProjectManager1?.filter(task=>{        
    const date = new Date(task.end_date)
    const timestamp = date.getTime()
      return timestamp > Date.now()
    });
  const tasksProjectManager1ActiveCritical = tasksProjectManager1Active?.filter(task=>{        
      const tpm1bc = task.priority === 1;
        return tpm1bc;
      });
  const tasksProjectManager1ActiveHigh = tasksProjectManager1Active?.filter(task=>{        
      const tpm1bc = task.priority === 2;
        return tpm1bc;
      });
  const tasksProjectManager1ActiveMedium = tasksProjectManager1Active?.filter(task=>{        
      const tpm1bc = task.priority === 3;
        return tpm1bc;
      });
  const tasksProjectManager1ActiveLow = tasksProjectManager1Active?.filter(task=>{        
      const tpm1bc = task.priority === 4;
        return tpm1bc;
      });
  const tasksProjectManager2 = tasks?.filter(task=>{
        const tpm1 = task.project_manager === 3;
            return tpm1;
        });
  const tasksProjectManager2Backlogs = tasksProjectManager2?.filter(task=>{        
        const date = new Date(task.end_date)
        const timestamp = date.getTime()
          return timestamp < Date.now()
        });
  const tasksProjectManager2BacklogsCritical = tasksProjectManager2Backlogs?.filter(task=>{        
        const tpm1bc = task.priority === 1;
          return tpm1bc;
        });
  const tasksProjectManager2BacklogsHigh = tasksProjectManager2Backlogs?.filter(task=>{        
        const tpm1bc = task.priority === 2;
          return tpm1bc;
        });
  const tasksProjectManager2BacklogsMedium = tasksProjectManager2Backlogs?.filter(task=>{        
        const tpm1bc = task.priority === 3;
          return tpm1bc;
        });
  const tasksProjectManager2BacklogsLow = tasksProjectManager2Backlogs?.filter(task=>{        
        const tpm1bc = task.priority === 4;
          return tpm1bc;
        });
  const tasksProjectManager2Active = tasksProjectManager2?.filter(task=>{        
        const date = new Date(task.end_date)
        const timestamp = date.getTime()
          return timestamp > Date.now()
        });
  const tasksProjectManager2ActiveCritical = tasksProjectManager2Active?.filter(task=>{        
          const tpm1bc = task.priority === 1;
            return tpm1bc;
          });
  const tasksProjectManager2ActiveHigh = tasksProjectManager2Active?.filter(task=>{        
          const tpm1bc = task.priority === 2;
            return tpm1bc;
          });
  const tasksProjectManager2ActiveMedium = tasksProjectManager2Active?.filter(task=>{        
          const tpm1bc = task.priority === 3;
            return tpm1bc;
          });
  const tasksProjectManager2ActiveLow = tasksProjectManager2Active?.filter(task=>{        
          const tpm1bc = task.priority === 4;
            return tpm1bc;
          });
  const tasksProjectManager3 = tasks?.filter(task=>{
            const tpm1 = task.project_manager === 4;
                return tpm1;
            });
  const tasksProjectManager3Backlogs = tasksProjectManager3?.filter(task=>{        
            const date = new Date(task.end_date)
            const timestamp = date.getTime()
              return timestamp < Date.now()
            });
  const tasksProjectManager3BacklogsCritical = tasksProjectManager3Backlogs?.filter(task=>{        
            const tpm1bc = task.priority === 1;
              return tpm1bc;
            });
  const tasksProjectManager3BacklogsHigh = tasksProjectManager3Backlogs?.filter(task=>{        
            const tpm1bc = task.priority === 2;
              return tpm1bc;
            });
  const tasksProjectManager3BacklogsMedium = tasksProjectManager3Backlogs?.filter(task=>{        
            const tpm1bc = task.priority === 3;
              return tpm1bc;
            });
  const tasksProjectManager3BacklogsLow = tasksProjectManager3Backlogs?.filter(task=>{        
            const tpm1bc = task.priority === 4;
              return tpm1bc;
            });
  const tasksProjectManager3Active = tasksProjectManager3?.filter(task=>{        
            const date = new Date(task.end_date)
            const timestamp = date.getTime()
              return timestamp > Date.now()
            });
  const tasksProjectManager3ActiveCritical = tasksProjectManager3Active?.filter(task=>{        
              const tpm1bc = task.priority === 1;
                return tpm1bc;
              });
  const tasksProjectManager3ActiveHigh = tasksProjectManager3Active?.filter(task=>{        
              const tpm1bc = task.priority === 2;
                return tpm1bc;
              });
  const tasksProjectManager3ActiveMedium = tasksProjectManager3Active?.filter(task=>{        
              const tpm1bc = task.priority === 3;
                return tpm1bc;
              });
  const tasksProjectManager3ActiveLow = tasksProjectManager3Active?.filter(task=>{        
              const tpm1bc = task.priority === 4;
                return tpm1bc;
              });
  const tasksProjectManager4 = tasks?.filter(task=>{
                const tpm1 = task.project_manager === 5;
                    return tpm1;
                });
  const tasksProjectManager4Backlogs = tasksProjectManager4?.filter(task=>{        
                const date = new Date(task.end_date)
                const timestamp = date.getTime()
                  return timestamp < Date.now()
                });
  const tasksProjectManager4BacklogsCritical = tasksProjectManager4Backlogs?.filter(task=>{        
                const tpm1bc = task.priority === 1;
                  return tpm1bc;
                });
  const tasksProjectManager4BacklogsHigh = tasksProjectManager4Backlogs?.filter(task=>{        
                const tpm1bc = task.priority === 2;
                  return tpm1bc;
                });
  const tasksProjectManager4BacklogsMedium = tasksProjectManager4Backlogs?.filter(task=>{        
                const tpm1bc = task.priority === 3;
                  return tpm1bc;
                });
  const tasksProjectManager4BacklogsLow = tasksProjectManager4Backlogs?.filter(task=>{        
                const tpm1bc = task.priority === 4;
                  return tpm1bc;
                });
            
  const tasksProjectManager4Active = tasksProjectManager4?.filter(task=>{        
                const date = new Date(task.end_date)
                const timestamp = date.getTime()
                  return timestamp > Date.now()
                });
  const tasksProjectManager4ActiveCritical = tasksProjectManager4Active?.filter(task=>{        
                  const tpm1bc = task.priority === 1;
                    return tpm1bc;
                  });
  const tasksProjectManager4ActiveHigh = tasksProjectManager4Active?.filter(task=>{        
                  const tpm1bc = task.priority === 2;
                    return tpm1bc;
                  });
  const tasksProjectManager4ActiveMedium = tasksProjectManager4Active?.filter(task=>{        
                  const tpm1bc = task.priority === 3;
                    return tpm1bc;
                  });
  const tasksProjectManager4ActiveLow = tasksProjectManager4Active?.filter(task=>{        
                  const tpm1bc = task.priority === 4;
                    return tpm1bc;
                  });
  const tasksProjectManager5 = tasks?.filter(task=>{
                    const tpm1 = task.project_manager === 6;
                        return tpm1;
                    });
  const tasksProjectManager5Backlogs = tasksProjectManager5?.filter(task=>{        
                    const date = new Date(task.end_date)
                    const timestamp = date.getTime()
                      return timestamp < Date.now()
                    });
  const tasksProjectManager5BacklogsCritical = tasksProjectManager5Backlogs?.filter(task=>{        
                    const tpm1bc = task.priority === 1;
                      return tpm1bc;
                    });
  const tasksProjectManager5BacklogsHigh = tasksProjectManager5Backlogs?.filter(task=>{        
                    const tpm1bc = task.priority === 2;
                      return tpm1bc;
                    });
  const tasksProjectManager5BacklogsMedium = tasksProjectManager5Backlogs?.filter(task=>{        
                    const tpm1bc = task.priority === 3;
                      return tpm1bc;
                    });
  const tasksProjectManager5BacklogsLow = tasksProjectManager5Backlogs?.filter(task=>{        
                    const tpm1bc = task.priority === 4;
                      return tpm1bc;
                    });
                
  const tasksProjectManager5Active = tasksProjectManager5?.filter(task=>{        
                    const date = new Date(task.end_date)
                    const timestamp = date.getTime()
                      return timestamp > Date.now()
                    });
  const tasksProjectManager5ActiveCritical = tasksProjectManager5Active?.filter(task=>{        
                      const tpm1bc = task.priority === 1;
                        return tpm1bc;
                      });
  const tasksProjectManager5ActiveHigh = tasksProjectManager5Active?.filter(task=>{        
                      const tpm1bc = task.priority === 2;
                        return tpm1bc;
                      });
  const tasksProjectManager5ActiveMedium = tasksProjectManager5Active?.filter(task=>{        
                      const tpm1bc = task.priority === 3;
                        return tpm1bc;
                      });
  const tasksProjectManager5ActiveLow = tasksProjectManager5Active?.filter(task=>{        
                      const tpm1bc = task.priority === 4;
                        return tpm1bc;
                      });

  const pm1backlogs = [
    {
      name: 'Critical',
      Critical: tasksProjectManager1BacklogsCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager1BacklogsHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager1BacklogsMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager1BacklogsLow.length,
    }
  ];
  const pm2backlogs = [
    {
      name: 'Critical',
      Critical: tasksProjectManager2BacklogsCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager2BacklogsHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager2BacklogsMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager2BacklogsLow.length,
    }
  ];
  const pm3backlogs = [
    {
      name: 'Critical',
      Critical: tasksProjectManager3BacklogsCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager3BacklogsHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager3BacklogsMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager3BacklogsLow.length,
    }
  ];
  const pm4backlogs = [
    {
      name: 'Critical',
      Critical: tasksProjectManager4BacklogsCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager4BacklogsHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager4BacklogsMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager4BacklogsLow.length,
    }
  ];
  const pm5backlogs = [
    {
      name: 'Critical',
      Critical: tasksProjectManager5BacklogsCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager5BacklogsHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager5BacklogsMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager5BacklogsLow.length,
    }
  ];
  const pm1active = [
    {
      name: 'Critical',
      Critical: tasksProjectManager1ActiveCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager1ActiveHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager1ActiveMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager1ActiveLow.length,
    }
  ];
  const pm2active = [
    {
      name: 'Critical',
      Critical: tasksProjectManager2ActiveCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager2ActiveHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager2ActiveMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager2ActiveLow.length,
    }
  ];
  const pm3active = [
    {
      name: 'Critical',
      Critical: tasksProjectManager3ActiveCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager3ActiveHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager3ActiveMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager3ActiveLow.length,
    }
  ];
  const pm4active = [
    {
      name: 'Critical',
      Critical: tasksProjectManager4ActiveCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager4ActiveHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager4ActiveMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager4ActiveLow.length,
    }
  ];
  const pm5active = [
    {
      name: 'Critical',
      Critical: tasksProjectManager5ActiveCritical.length,
    },
    {
      name: 'High',
      High: tasksProjectManager5ActiveHigh.length,
    },
    {
      name: 'Medium',
      Medium: tasksProjectManager5ActiveMedium.length,
    },
    {
      name: 'Low',
      Low: tasksProjectManager5ActiveLow.length,
    }
  ];
    return ( 
        <Container maxwidth="lg">
          <Paper className={classes.heading} elevation={6}>
            Dashboard
          </Paper>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                {(userId === 1 || userId ===2) && (
                <> 
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.projectManager} elevation={6}>Project Manager 1</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Backlogs</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm1backlogs}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Active Tasks</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm1active}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                </>
                )}
                {(userId === 1 || userId ===3) && (
                <> 
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.projectManager} elevation={6}>Project Manager 2</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Backlogs</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm2backlogs}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Active Tasks</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm2active}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                </>
                )}
                {(userId === 1 || userId === 4) && (
                <> 
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.projectManager} elevation={6}>Project Manager 3</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Backlogs</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm3backlogs}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Active Tasks</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm3active}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                </>
                )}
                {(userId === 1 || userId === 5) && (
                <> 
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.projectManager} elevation={6}>Project Manager 4</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Backlogs</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm4backlogs}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Active Tasks</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm4active}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                </>
                )}
                {(userId === 1 || userId === 6) && (
                <> 
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.projectManager} elevation={6}>Project Manager 5</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Backlogs</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm5backlogs}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={6}>Active Tasks</Paper>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                    width={500}
                    height={300}
                    data={pm5active}
                    margin={{
                    top: 5,
                    right: 50,
                    left: 50,
                    bottom: 5,
                    }}
                    >
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Critical" fill="#d50000" />
                      <Bar dataKey="High" fill="#ff6d00" />
                      <Bar dataKey="Medium" fill="#ffff00" />
                      <Bar dataKey="Low" fill="#00c653" />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                </>
                )}
              </Grid>
            </Container>
          </Grow>
        </Container>

    );
}
 
export default Dashboard;