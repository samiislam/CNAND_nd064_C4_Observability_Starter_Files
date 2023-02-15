from flask import Flask, render_template, jsonify
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()

metrics = PrometheusMetrics(app)
# static information as metric
metrics.info("app_info", "Frontend Application", version="1.0.0")


@app.route("/")
def homepage():
    return render_template("main.html")


@app.route("/healthz")
def healthz():
    return jsonify(result="OK frontend")


if __name__ == "__main__":
    app.run()
