const words = ["Full Stack Web Developer", "Aviator", "Servant Leader", "Serial Tinkerer", "Coffee Enthusiast", "Problem Solver", "Cottage Cheese Aficionado"];
let i = 0;
let timer;
let delay = 20;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
            
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
        
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();