import { useState } from "react";
import type { Interval } from "./types/workout";

function App() {
  const [power, setPower] = useState(200);
  const [duration, setDuration] = useState(5);
  const [intervals, setIntervals] = useState<Interval[]>([]);

  const addInterval = () => {
    const newInterval: Interval = {
      power,
      duration,
    };

    setIntervals([...intervals, newInterval]);
  };

  const deleteInterval = (indexToDelete: number) => {
    const updatedIntervals = intervals.filter(
      (_, index) => index !== indexToDelete
    );

    setIntervals(updatedIntervals);
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial",
        backgroundColor: "#1e1e1e",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>Bike Trainer App</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h2>Workout Builder</h2>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div>
            <label>Power (Watts)</label>
            <br />
            <input
              type="number"
              value={power}
              onChange={(e) => setPower(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Duration (Minutes)</label>
            <br />
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
        </div>

        <button onClick={addInterval}>Add Interval</button>
      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h2>Intervals</h2>

        {intervals.length === 0 ? (
          <p>No intervals added yet.</p>
        ) : (
          intervals.map((interval, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem",
                borderBottom: "1px solid gray",
              }}
            >
              <p>
                {interval.power}W - {interval.duration} min
              </p>

              <button onClick={() => deleteInterval(index)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
