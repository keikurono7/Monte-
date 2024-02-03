// Define the message handler for the worker
const handleMessage = (event) => {
  const { start, end } = event.data;

  // Generate random points within the specified range
  let total = 0;
  let inside = 0;
  for (let i = start; i < end; i++) {
    const x = Math.random();
    const y = Math.random();
    total++;
    if (x * x + y * y <= 1) {
      inside++;
    }
  }

  // Send the result back to the main thread
  postMessage({ total, inside });
};

// Set up the message listener
addEventListener('message', handleMessage);
