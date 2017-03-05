from bottle import route, run, template, static_file, request
import json

@route('/', method = 'GET')
def index():
	return template("index.html")

@route('/js/<filename:re:.*\.js>', method='GET')
def javascripts(filename):
    return static_file(filename, root='js')


@route('/css/<filename:re:.*\.css>', method='GET')
def stylesheets(filename):
    return static_file(filename, root='css')

@route('/images/<filename:re:.*\.(jpg|png|gif|svg)>', method='GET')
def images(filename):
    return static_file(filename, root='images')    

def main():
	run(host='localhost', port=7005, debug = True)
	

if __name__ == '__main__':
	main()