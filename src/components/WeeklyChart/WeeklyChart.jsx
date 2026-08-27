import { useEffect, useState } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { getHospitalWeeklyAppointments } from "../../api/appointmentApi";

function WeeklyChart() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadWeeklyAppointments() {
            try {
                setLoading(true);
                setError("");

                const token = localStorage.getItem("token");

                const weeklyData =
                    await getHospitalWeeklyAppointments(token);

                setData(weeklyData);
            } catch (err) {
                console.error(
                    "Failed to load weekly appointments:",
                    err
                );

                setError("Failed to load weekly appointments.");
            } finally {
                setLoading(false);
            }
        }

        loadWeeklyAppointments();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-2xl font-semibold text-on-surface">
                    Weekly Appointments
                </h3>
            </div>

            <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant">
                <div className="w-full h-80">
                    {loading ? (
                        <div className="h-full flex items-center justify-center text-on-surface-variant">
                            Loading weekly appointments...
                        </div>
                    ) : error ? (
                        <div className="h-full flex items-center justify-center text-on-surface-variant">
                            {error}
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                barSize={35}
                                barCategoryGap="10%"
                                margin={{
                                    top: 10,
                                    right: 5,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid
                                    vertical={false}
                                    stroke="var(--color-outline-variant)"
                                    strokeDasharray="3 3"
                                />

                                <XAxis
                                    dataKey="day"
                                    tick={{
                                        fontSize: 14,
                                        fill: "var(--color-on-surface-variant)",
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    tick={{
                                        fill: "var(--color-on-surface-variant)",
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <Tooltip
                                    cursor={{
                                        fill: "var(--color-surface-container-high)",
                                    }}
                                    contentStyle={{
                                        background:
                                            "var(--color-surface-container-high)",
                                        border: "1px solid var(--color-outline-variant)",
                                        borderRadius: "10px",
                                        color: "var(--color-on-surface)",
                                    }}
                                    labelStyle={{
                                        color: "var(--color-on-surface)",
                                        marginBottom: 4,
                                    }}
                                    itemStyle={{
                                        color: "var(--color-primary)",
                                    }}
                                />

                                <Bar
                                    dataKey="appointments"
                                    fill="var(--color-primary)"
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeeklyChart;