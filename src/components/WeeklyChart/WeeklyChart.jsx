import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function WeeklyChart() {
    const data = [
        { day: "Mon", appointments: 20 },
        { day: "Tue", appointments: 35 },
        { day: "Wed", appointments: 28 },
        { day: "Thu", appointments: 40 },
        { day: "Fri", appointments: 25 },
        { day: "Sat", appointments: 15 },
        { day: "Sun", appointments: 10 },
    ];

    return (
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant">
            <div className="mb-5">
                <h3 className="text-lg font-semibold text-on-surface mb-1">Weekly Appointments</h3>
                <p className="text-sm text-on-surface-variant">Number of appointments for current week</p>
            </div>

            <div className="flex justify-center h-80">
                <div className="w-full max-w-2xl h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            barSize={35}
                            barCategoryGap="10%"
                            margin={{ top: 10, right: 5, left: 0, bottom: 0 }}
                        >
                            <XAxis
                                dataKey="day"
                                tick={{ fontSize: 14, fill: "var(--color-on-surface-variant)" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fill: "var(--color-on-surface-variant)" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: "var(--color-surface-container-high)",
                                    border: "1px solid var(--color-outline-variant)",
                                    borderRadius: "10px",
                                    color: "var(--color-on-surface)",
                                }}
                                labelStyle={{ color: "var(--color-on-surface)" }}
                            />
                            <Bar dataKey="appointments" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default WeeklyChart;