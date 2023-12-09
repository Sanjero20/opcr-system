import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

function AdminDashboard() {
  const accountChartRef = useRef(null);
  const campusChartRef = useRef(null);

  useEffect(() => {
    // Sample data for demonstration purposes
    const accountData = [10, 20, 30];
    const campusData = [5, 15, 25];

    // Account Chart
    if (accountChartRef.current) {
      const accountChart = new Chart(accountChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Category 1', 'Category 2', 'Category 3'],
          datasets: [
            {
              label: 'Accounts',
              data: accountData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false, // Allows setting fixed width and height
        },
      });

      // Cleanup on component unmount
      return () => {
        accountChart.destroy();
      };
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    // Sample data for demonstration purposes
    const campusData = [5, 15, 25];

    // Campus Chart
    if (campusChartRef.current) {
      const campusChart = new Chart(campusChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Category 1', 'Category 2', 'Category 3'],
          datasets: [
            {
              label: 'Campuses',
              data: campusData,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false, // Allows setting fixed width and height
        },
      });

      // Cleanup on component unmount
      return () => {
        campusChart.destroy();
      };
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      {/* Main Content */}
      <div className="container mx-auto mt-8">
        {/* Accounts Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Accounts</h2>

          {/* Replace this with actual data fetching logic */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-white p-4 shadow-md">
              {/* Account Card Content Goes Here */}
              Account 1
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              {/* Account Card Content Goes Here */}
              Account 2
            </div>
            {/* Add more account cards as needed */}
          </div>
        </div>

        {/* Accounts Chart */}
        <div className="mb-8 text-center">
          <canvas
            ref={accountChartRef}
            className="mx-auto"
            width="400"
            height="300"
          ></canvas>
        </div>

        {/* Campuses Section */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Campuses</h2>

          {/* Replace this with actual data fetching logic */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-white p-4 shadow-md">
              {/* Campus Card Content Goes Here */}
              Campus 1
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              {/* Campus Card Content Goes Here */}
              Campus 2
            </div>
            {/* Add more campus cards as needed */}
          </div>
        </div>

        {/* Campuses Chart */}
        <div className="text-center">
          <canvas
            ref={campusChartRef}
            className="mx-auto"
            width="400"
            height="300"
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
