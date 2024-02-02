"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";

function Signup() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <Grid container>
                <Grid item xs={12} lg={12} mb={2}>
                    <Typography
                        fontWeight="700"
                        variant="h4"
                        style={{ textAlign: "center" }}
                    >
                        {"Sign Up"}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12} mb={4}>
                    <div className="white-box" style={{ textAlign: "center" }}>
                        <Grid container>
                            <form
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                }}
                                onSubmit={formik.handleSubmit}
                            >
                                <Grid item xs={12} lg={12} mb={3}>
                                    <TextField
                                        mb={2}
                                        style={{ width: "40%" }}
                                        className="full"
                                        id="outlined-basic"
                                        label="Enter First Name"
                                        variant="outlined"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={12} mb={3}>
                                    <TextField
                                        mb={2}
                                        style={{ width: "40%" }}
                                        className="full"
                                        id="outlined-basic"
                                        label="Enter Last Name"
                                        variant="outlined"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={12} mb={3}>
                                    <TextField
                                        mb={2}
                                        style={{ width: "40%" }}
                                        className="full"
                                        id="outlined-basic"
                                        label="Enter Email Address"
                                        variant="outlined"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={12} mb={3}>
                                    <TextField
                                        mb={2}
                                        style={{ width: "40%" }}
                                        className="full"
                                        id="outlined-basic"
                                        label="Enter Password Here"
                                        variant="outlined"
                                        name="password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                            </form>
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={formik.handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Signup;
