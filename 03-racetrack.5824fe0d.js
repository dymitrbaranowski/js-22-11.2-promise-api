!function(){var t=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],e=0,n={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};function r(t){n.winnerField.textContent=t}function o(t){n.progressField.textContent=t}function c(t){return new Promise((function(e){var n,r,o=(n=2e3,r=3500,Math.floor(Math.random()*(r-n+1)+n));setTimeout((function(){e({horse:t,time:o})}),o)}))}n.startBtn.addEventListener("click",(function(){e+=1;var i=t.map(c);r(""),o("🤖 Заезд начался, ставки не принимаются!"),a=i,Promise.race(a).then((function(t){var o=t.horse,c=t.time;r("🎉 Победил ".concat(o,", финишировав за ").concat(c,"\n    времени")),function(t){var e=t.horse,r=t.time,o=t.raceCounter,c="<tr><td>".concat(o,"</td><td>").concat(e,"</td><td>").concat(r,"</td></tr>");n.tableBody.insertAdjacentHTML("beforeend",c)}({horse:o,time:c,raceCounter:e})})),function(t){Promise.all(t).then((function(){o("📝 Заезд окончен, принимаются ставки.")}))}(i);var a}))}();
//# sourceMappingURL=03-racetrack.5824fe0d.js.map
