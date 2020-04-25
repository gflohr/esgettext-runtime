//let useJSONCatalog = true;

/* eslint no-underscore-dangle: "off" */

interface Placeholder {
	[index: string]: string;
}

function expand(msg: string, placeholders: Placeholder): string {
	return msg.replace(/\{([a-zA-Z][0-9a-zA-Z]*)\}/g, (_, match) => {
		if (Object.prototype.hasOwnProperty.call(placeholders, match)) {
			return placeholders[match];
		} else {
			return `{${match}}`;
		}
	});
}

/**
 * Set the preferred message format.
 *
 * @param json true if json should preferred over mo files.
 *
 * The library can either load message catalogs in GtxI18N JSON or
 * in mo format.
 */
export function useJSON(_json: boolean): void {
	//useJSONCatalog = json;
}

export function bindtextdomain(
	_domainname: string,
	_path?: string,
): Promise<boolean> {
	return new Promise((resolve) => {
		resolve(true);
	});
}

/**
 * Translate a simple string.
 *
 * @param msgid the string to translate
 *
 * @returns the translated string
 */
export function _(msgid: string): string {
	return msgid;
}

/**
 * Translate a string with placeholders.
 *
 * Placeholder names must begin with an ASCII alphabetic character (a-z, A-Z)
 * and can be followed by an arbitrary number of ASCII alphabetic characters
 * or ASCII digits (a-z, A-Z).
 *
 * @param msgid
 * @param placeholders
 */
export function _x(msgid: string, placeholders: Placeholder): string {
	return expand(msgid, placeholders);
}
