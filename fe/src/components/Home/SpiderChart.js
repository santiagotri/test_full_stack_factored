import { getSkills, getUser } from "../../services/userService";
import Chart from "react-apexcharts";

export default function SpiderChart() {
  const user = getUser();
  const skills = getSkills();

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: skills[0],
      },
    },
    series: [
      {
        name: user.name,
        data: skills[1],
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={state.options} series={state.series} type="radar" />
        </div>
      </div>
    </div>
  );
}
