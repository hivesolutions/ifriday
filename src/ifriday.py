#!/usr/bin/python
# -*- coding: utf-8 -*-

# Hive iFriday System
# Copyright (c) 2008-2019 Hive Solutions Lda.
#
# This file is part of Hive iFriday System.
#
# Hive iFriday System is free software: you can redistribute it and/or modify
# it under the terms of the Apache License as published by the Apache
# Foundation, either version 2.0 of the License, or (at your option) any
# later version.
#
# Hive iFriday System is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# Apache License for more details.
#
# You should have received a copy of the Apache License along with
# Hive iFriday System. If not, see <http://www.apache.org/licenses/>.

__author__ = "João Magalhães <joamag@hive.pt>"
""" The author(s) of the module """

__version__ = "1.0.0"
""" The version of the module """

__revision__ = "$LastChangedRevision$"
""" The revision number of the module """

__date__ = "$LastChangedDate$"
""" The last change date of the module """

__copyright__ = "Copyright (c) 2008-2019 Hive Solutions Lda."
""" The copyright for the module """

__license__ = "Apache License, Version 2.0"
""" The license for the module """

import flask

import quorum

app = quorum.load(name = __name__)

@app.route("/", methods = ("GET",))
@app.route("/index", methods = ("GET",))
def index():
    return flask.render_template(
        "index.html.tpl"
    )

@app.route("/share", methods = ("GET",))
def share():
    return flask.render_template(
        "share.html.tpl"
    )

@app.errorhandler(404)
def handler_404(error):
    return str(error)

@app.errorhandler(413)
def handler_413(error):
    return str(error)

@app.errorhandler(Exception)
def handler_exception(error):
    return str(error)

if __name__ == "__main__":
    quorum.run(server = "netius")
else:
    __path__ = []
