# Security Policy

## Supported Versions


| Version | Supported          |
| ------- | ------------------ |
| 1.0  | Not needed |

## Reporting a Vulnerability

To report a vulnerability, create a issue with the tag Vulnerability and the title including the filepath 
* for Master, use master/FOLDER/FILE.EXTENSION
* for Branches other than master, use BRANCHNAME/FOLDER/FILE.EXTENSION

Make sure to include a description of the vulnerability. 
If possible, attach any screenshots, line numbers, or suggestions

* Line Number Format: 
  * Start: LN.CHAR 
  * End: LN.CHAR

* Suggestion Format:
```md
	# Suggestion Name
  		### Suggestion Replace (using line numbers)
			Original code
			Suggestion code
			Suggestion code description
```
For example: 
# Prevent external changes
### Line numb #x.x to #x.x
```html
<meta name="security-content-policy" content="default-src '127.0.0.1'">
```
```html
<meta name="security-content-policy" content="default-srce 'self'">
```
127.0.0.1 points to localhost, so it can be described by anthing on the user's computer, but 'self' points to local storage which is write-protected.

(I think so, I don't know that much about security, but this is an example)
