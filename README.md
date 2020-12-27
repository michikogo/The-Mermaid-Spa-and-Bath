# The Mermaid Spa and Bath
Sample responsive website that allows users to check products, services, make reservations, and check promos that the sample company offers. 

This project was made with `react hooks`, `react native`, `firebase`, and `react-bootstrap`.

## Usage
1. Clone the respiratory 
   ```bash
   git clone https://github.com/michikogo/The-Mermaid-Spa-and-Bath.git
   ```
2. Install libraries
   ```bash
   npm install
   ```
3. Run the website
   ```bash
   npm start
   ```

## Webpages
There are seven webpages that were created namely:
Webpages | Description | Libraries
| :---: | :---: | :---:
Home | Shows featured services, about us, products, and reservations |  React Native
About Us | Describes the sample company | React Native
Products | Pulls data from `firebase` and shows list of products the company sells | React Native, React Router, Firebase
Specific Product | When `products page` is clicked it will be redirected to this page pulling data from `firebase` | React Hooks, Firebase
Treatments | Shows all treatments offered by company the list is pulled from `firebase`  | React Hooks, Firebase
Promo | Shows the promo of the company | React Hook
Reservations | Form for reserving the placing into firebase | React Hook, Firebase, React Datepicker
