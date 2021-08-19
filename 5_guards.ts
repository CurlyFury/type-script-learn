class MyResponse {
	header = 'response header'
	result = 'result'
}

class MyError {
	header = 'error header'
	message = 'error message'
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result
		}
	}

	if (res instanceof MyError) {
		return {
			info: res.header + res.message
		}
	}
}

//==================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
	//...
}

setAlertType('danger')
setAlertType('success')
// setAlertType('default')