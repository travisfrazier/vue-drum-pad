Vue.component('app-pad', {
	props: ['datakey', 'letter', 'isPlaying', 'src'],
	template: `
				<button v-bind:class="{ playing: isPlaying }" v-on:click="playSound(src)" v-bind:data-key="datakey">
					<kbd>{{ letter }}</kbd>
				</button>
			  `,
	inherit: true,
	methods: {
		playSound: function(sound) {
			this.isPlaying = !this.isPlaying;
			if (sound) {
				const audio = new Audio(sound);
				audio.play();
			}
			setTimeout(
				function() {
					this.isPlaying = !this.isPlaying;
				}.bind(this),
				100
			);
		}
	}
});

new Vue({
	el: '#app',
	data: {
		title: 'Drum Pad Bro',
		count: 0,
		pads: [
			{
				id: 1,
				dataKey: 65,
				letter: 'Kick',
				src: '/drums/drum-kick.mp3'
			},
			{
				id: 2,
				dataKey: 83,
				letter: 'Mod',
				src: '/drums/drum-mod.mp3'
			},
			{
				id: 3,
				dataKey: 68,
				letter: 'Snare',
				src: '/drums/drum-snare.mp3'
			},
			{
				id: 4,
				dataKey: 70,
				letter: 'Clap',
				src: '/drums/drum-clap.mp3',
				isPlaying: false
			},
			{
				id: 5,
				dataKey: 90,
				letter: 'Hat',
				src: '/drums/drum-hat.mp3'
			},
			{
				id: 6,
				dataKey: 88,
				letter: 'Open Hat',
				src: '/drums/drum-openh.mp3'
			},
			{
				id: 7,
				dataKey: 67,
				letter: 'Crash',
				src: '/drums/drum-crash.mp3'
			},
			{
				id: 8,
				dataKey: 86,
				letter: 'Tom',
				src: '/drums/drum-tom.mp3'
			}
		]
	},
	methods: {
		switchKit: function() {
			this.count++;
			if (this.count < 2) {
				this.pads.forEach(function(pad) {
					return (pad.src = 'kit-two' + pad.src);
				});
			} else {
				location.reload();
			}
		}
	}
});
