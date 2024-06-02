
# Alert Dashboard

## Description

This is a React application for visualizing network security alerts. The dashboard displays key metrics, including the total number of alerts, the most frequent source IP, the most targeted port, and the most frequent alert category. It also features interactive charts and a table listing all alerts.

## Deployed Link: https://dashboard-alert.vercel.app/

## Features

- Summary of alerts including:
  - Total number of alerts
  - Most frequent source IP with percentage
  - Most targeted port with percentage
  - Most frequent category with percentage
- Interactive charts:
  - Alerts over time
  - Severity distribution
  - Category distribution
- Responsive design

## Technologies Used

- React
- Tailwind CSS
- Recharts
- Icons from React Icons


## Installation

To run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/MOHDSAMIULLAH/dashboard-alert.git
    cd dashboard-alert
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.


## Usage

### Viewing Alerts

The table at the bottom of the page lists all the alerts. You can see the details such as source IP, destination port, and alert category.

### Viewing Charts

The charts provide a visual representation of alerts over time, severity distribution, and category distribution.

## Data Processing

The `processAlertData` function in `src/utils/utils.js` processes the alert data to compute summary metrics, alerts over time, severity distribution, and category distribution.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
