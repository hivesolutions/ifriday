{% extends "partials/layout.html.tpl" %}
{% block content %}
    <div class="panel panel-main">
        <div class="logo"></div>
        <div class="stroke"></div>
        <div class="counter">
            <div class="time days">
                <div class="value">--</div>
                <div class="label">days</div>
            </div>
            <div class="time hours">
                <div class="value">--</div>
                <div class="label">hours</div>
            </div>
            <div class="time minutes">
                <div class="value">--</div>
                <div class="label">minutes</div>
            </div>
            <div class="time seconds">
                <div class="value">--</div>
                <div class="label">seconds</div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="button share" data-link="{{ url_for('share') }}"></div>
    </div>
{% endblock %}
