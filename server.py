from flask import Flask, request, jsonify
from flask_cors import CORS
import pgeocode

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

@app.route('/get-location', methods=['POST'])

def get_location():
    data = request.get_json()
    country = data.get("country")
    postal_code = data.get("postal_code")

    if not country or not postal_code:
        return jsonify({"error": "Country and postal code are required"}), 400

    nomi = pgeocode.Nominatim(country)
    location = nomi.query_postal_code(postal_code)

    if location.empty:
        return jsonify({"error": "Invalid postal code"}), 404

    return jsonify({
        "country": country,
        "postal_code": postal_code,
        "city": location.place_name,
        "state": location.state_name
    })

if __name__ == '__main__':
    app.run(port=5001, debug=True)