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
				src: '/kit-one/drum-kick.mp3'
			},
			{
				id: 2,
				dataKey: 83,
				letter: 'Mod',
				src: '/kit-one/drum-mod.mp3'
			},
			{
				id: 3,
				dataKey: 68,
				letter: 'Snare',
				src: '/kit-one/drum-snare.mp3'
			},
			{
				id: 4,
				dataKey: 70,
				letter: 'Clap',
				src: '/kit-one/drum-clap.mp3',
				isPlaying: false
			},
			{
				id: 5,
				dataKey: 90,
				letter: 'Hat',
				src: '/kit-one/drum-hat.mp3'
			},
			{
				id: 6,
				dataKey: 88,
				letter: 'Open Hat',
				src: '/kit-one/drum-openh.mp3'
			},
			{
				id: 7,
				dataKey: 67,
				letter: 'Crash',
				src: '/kit-one/drum-crash.mp3'
			},
			{
				id: 8,
				dataKey: 86,
				letter: 'Tom',
				src: '/kit-one/drum-tom.mp3'
			}
		]
	},
	methods: {
		switchKit: function() {
			this.count++;
			const newKit = [
				'kit-two/drum-kick.mp3',
				'kit-two/drum-mod.mp3',
				'kit-two/drum-snare.mp3',
				'kit-two/drum-clap',
				'kit-two/drum-hat',
				'kit-two/drum-openh.mp3',
				'kit-two/drum-crash.mp3',
				'kit-two/drum-tom.mp3'
			];
			if (this.count < 2) {
				this.pads.forEach(function(pad, i) {
					return (pad.src = newKit[i]);
				});
			} else {
				location.reload();
			}
		}
	}
});
