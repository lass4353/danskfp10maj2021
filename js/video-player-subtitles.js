var subtitles = {
    T_193818_video_1: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:01:15"), "Uenige sammen<br />Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:01:15"), TTime("00:00:04:30"), "Når vi er uenige, er det et billede af demokratiet."),
			T(TTime("00:00:04:30"), TTime("00:00:07:15"), "Vi er jo ikke ens."),
			T(TTime("00:00:07:15"), TTime("00:00:09:00"), "Man har ytringsfrihed."),
			T(TTime("00:00:09:00"), TTime("00:00:13:15"), "Man har lov til at sige, hvis der er noget, der skal laves om."),
			T(TTime("00:00:13:15"), TTime("00:00:14:30"), "Det kan jeg gode lide."),
			T(TTime("00:00:14:30"), TTime("00:00:21:00"), "Det er vigtigt, at vi kan være uenige sammen, hvis vi skal udvikle os."),
			T(TTime("00:00:21:00"), TTime("00:00:23:30"), "Hvis man skal blive klogere, skal man lytte."),
			T(TTime("00:00:23:30"), TTime("00:00:28:00"), "– De stjæler jo hinandens idéer.<br />– Det betyder meget."),
			T(TTime("00:00:28:00"), TTime("00:00:31:15"), "– Man tænker anderledes.<br />– Det bliver et spændende valg."),
			T(TTime("00:00:31:15"), TTime("00:00:35:30"), "– Det ved jeg sgu ikke.<br />– Vi rummer så meget alle sammen."),
			T(TTime("00:00:35:30"), TTime("00:00:39:45"), "Uenige sammen")
			
        ]
    },
	
	T_193818_video_2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:02:15"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:02:15"), TTime("00:00:05:30"), "Madens Folkemøde<br />Engestofte Gods – Lolland"),
			T(TTime("00:00:12:00"), TTime("00:00:13:15"), "Workshop"),
			T(TTime("00:00:27:15"), TTime("00:00:28:30"), "Ohlandsbread"),
			T(TTime("00:00:32:00"), TTime("00:00:33:15"), "Meyers Minimølle"),
			T(TTime("00:00:34:30"), TTime("00:00:36:15"), "Gratis surdej. Hvis din surdej svigter dig, eller du har svigtet din surdej."),
			T(TTime("00:00:40:00"), TTime("00:00:41:30"), "Madens Folkemøde. Festmiddag."),
			T(TTime("00:01:20:15"), TTime("00:01:22:15"), "Madens Folkemøde")
        ]
    }
};


/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if(arguments.length == 1) {
		frames = (arguments[0]*1)/24;
	}
	else if(arguments.length == 2) {
		frames = (arguments[1]*1)/24;
		seconds = arguments[0]*1;
	}
	else if(arguments.length == 3) {
		frames = (arguments[2]*1)/24;
		seconds = arguments[1]*1;
		minutes = (arguments[0]*1)*60;
	}
	else if(arguments.length == 4) {
		frames = (arguments[3]*1)/24;
		seconds = arguments[2]*1;
		minutes = (arguments[1]*1)*60;
		hours = (arguments[0]*1)*3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * @param {*} value 
 */
function UndefinedToZero(value) {
	if(typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 * @param {numeric} frames Not Required
 * @param {numeric} seconds Not Required
 * @param {numeric} minutes Not Required
 * @param {numeric} hours Not Required
 */
function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if(typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3]*1)/24;
	var seconds = split[2]*1;
	var minutes = (split[1]*1)*60;
	var hours = (split[0]*1)*3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}