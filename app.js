const warmUp = {
    title: ['warmup'],
    time: {
        totalTime: '3min',
        timeOn: '30sec',
        timeOff: '5sec',
        sets: '2'
    },
    exercise: {
        modifiedJumpingJacks: {
            name: 'modified jumping jack',
            number: '1',
            steps: [
                '<li>Stand straight with your feet together and your hands by your sides. Keep the knees slightly bent and in line with your hips and feet.</li>',
                '<li>Take a step to the right and bring both hands together above your head. Engage your core muscles and your glutes',
                'Bring your right leg in, lower your arms and return to the starting position.</li>',
                `<li>Repeat with the left leg and alternate sides until the set is complete. Keep the arms extended and the elbows loose during the entire exercise.</li>`
            ],
            context: [
                '<li>Primary Muscles: Glutes, Quads, Hip Flexors</li>',
                '<li>Secondary Muscles: Legs, Abs, Shoulders</li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/jumpingJacks.MOV'
        },
        marchInPlace: {
            name: 'March In Place',
            number: '2',
            steps: [
                '<li>Stand straight with your elbows bent at a 90-degree angle and your feet hip width apart. Faceforward and maintain your chest open and your back straight</li>',
                '<li>Bring your right elbow forward at the same time as you bring your left knee up.</li>',
                '<li>Repeat on the opposite side and keep alternating sides until the set is complete.</li>'
            ],
            context: [
                '<li>Hips, Thighs</li>',
                '<li>Legs, Arms, Core, Glutes</li>',
                '<li>No equipments</li>'
            ],
            video: `./assets/videos/march.MOV`

        },
        buttKicksBackSqueez: {
            name: 'Butt Kicks, Back Squeeze',
            number: '3',
            steps: [
                '<li>Stand tall with your feet slightly wider than shoulder-width apart and face forward.</li>',
                '<li>Kick your right feet up, until the heels touch the glutes, and pump your arms back at 90-degrees angle to squeeze back at the same time.</li>',
                '<li>Return to the starting position and repeat on the opposite side.</li>'
            ],
            context: [
                '<li>Hamstrings, Glutes</li>',
                '<li>Abs, Legs, Arms, Back</li>',
                '<li>No equipments</li>'
            ],
            video: `./assets/videos/buttKicks.MOV`
        }
    }
}

const mainWorkout = {
    title: ['main-workout'],
    time: {
        totalTime: '10min',
        timeOn: '30sec',
        timeOff: '10sec',
        sets: '3'
    },
    exercise: {
        narrowSquatToSumoSquat: {
            name: 'Narrow Squat to Sumo Squat',
            number: '1',
            steps: [
                '<li>Stand up with your feet shoulder-width apart. Maintain your back in alignment, by keeping your chest up and your hips back.</li>',
                `<li>Bend your knees, press your hips back and stop the movement once the hip joint is slightlylower than the knees. Don't let the knees extend beyond the toes and put pressure on the heels of the feet.</li>`,
                `<li>Press your heels into the floor, squeeze quads and glutes to return to the initial position.</li>`,
                '<li>Step right feet out a bit more further than shoulder width apart. Lower yourself by bending your knees and pressing your hips back.</li>',
                '<li>Once your thighs are parallel to the floor, come back up and bring feet back to shoulder width apart.</li>',
                '<li>Repeat on the opposite side</li>'
            ],
            context: [
                '<li>Primary Muscles: Glutes, Quads, Inner Thighs, Hip Flexors</li>',
                '<li>Secondary Muscles: Hamstrings, Calves, Abds, Lower Back<li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/squats.MOV'
        },
        lungeTwist: {
            name: 'Lung Twist',
            number: '2',
            steps: [
                '<li>Stand straight with your feet hip-width apart and one arm overlapping the other at a 90 degree angle lifted chest height in front of you</li>',
                '<li>Take a step forward with your right leg, keep the weight in the front heel, bend both knees to a 90-degree angle and rotate your torso to the right. Squeeze your glutes and keep your core tight.</li>',
                `<li>Return to the starting position and repeat the movement on the left side.</li>`,
                `<li>Alternate sides until the set is complete.</li>`
            ],
            context: [
                '<li>Primary Muscles: Glutes, Quads, Hamstrings, Obliques</li>',
                '<li>Secondary Muscles: Abds</li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/lunge.MOV'
        },
        mountainClimbers: {
            name: 'Mountain Climbers',
            number: '3',
            steps: [
                '<li>Start with your body in a straight line and your hands slightly wider than shoulder-width apart. Keep your toes and balls of the feet touching the floor.</li>',
                '<li>Bring one knee up toward the center of your stomach and then quickly alternate between legs.</li>',
                `<li>Continue alternating until the set is complete.</li>`,
                `<li>Maintain a plank position during the entire exercise, keep your core engaged, your hips low and your body in a straight line.</li>`
            ],
            context: [
                '<li>Primary Muscles: Glutes, Abs, Hips, Legs</li>',
                '<li>Secondary Muscles: Chest, Shoulders, Arms</li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/mountain.MOV'
        },
        gluteBridgesAbductors: {
            name: 'Glute Bridges Abductors',
            number: '4',
            steps: [
                '<li>Lie on your back with your hands by your sides and your knees bent.</li>',
                '<li>Press down through the heels and lift your hips off the mat, while keeping your back straight, Keep this position through the entire exercise while pressing your knees outward pause for 1 second.</li>',
                `<li>Continue alternating until the set is complete.</li>`,
                `<li>Return to the starting position and repeat the movement until the set is complete.</li>`
            ],
            context: [
                '<li>Primary Muscles: Glutes</li>',
                '<li>Secondary Muscles: Core, Hamstrings</li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/hipFlex.MOV'
        },
        kneePushUpArmExtension: {
            name: 'Knee Push Up Arm Extension',
            number: '5',
            steps: [
                '<li>Start in a high plank position, hands below the shoulders,then place knees on the mat. Keep your head, hips, and torso in line. Maintain your core muscles tight and keep your spine in a neutral position.</li>',
                '<li>Keeping your back straight, start bending the elbows until your chest is touching the floor.</li>',
                `<li>Pause, lift hands slightly off the ground and extend your arms in front of you whilst keeping your chest lifted, still lifted, pull arm back for hand to be back below the shoulder and push back to the starting position.</li>`,
                `<li>Repeat until the set is complete.</li>`
            ],
            context: [
                '<li>Primary Muscles: Chest, Back</li>',
                '<li>Secondary Muscles: Abs, Shoulders, Arms</li>',
                '<li>Equipments: No equipments</li>'
            ],
            video: './assets/videos/pushUp.MOV'
        }
    }
}


class Post {
    constructor(variable){
        this.variable = variable;
    }
    post(){
        //Post total time of workout
        const totalTime = document.querySelector(`.total-${this.variable.title[0]}`).textContent = this.variable.time.totalTime;

        const timeOn = document.querySelector(`.${this.variable.title[0]}-time-on`).textContent = this.variable.time.timeOn;

        const timeOff = document.querySelector(`.${this.variable.title[0]}-time-off`).textContent = this.variable.time.timeOff;

        const sets = document.querySelector(`.${this.variable.title[0]}-sets`).textContent = this.variable.time.sets;

        const exerciseParentContainer = document.querySelector(`#${this.variable.title[0]}__container`);

        const exerciseArray = Object.values(this.variable.exercise);
        
        
        exerciseArray.forEach(function(x) {
            const exerciseChildContainer = document.createElement('div');
            exerciseChildContainer.className = 'exercise';
            exerciseChildContainer.innerHTML = `
                <div class="exercise__number">
                    <span>${x.number}</span>
                </div>
                <div class="exercise__name">
                    <h3>${x.name}</h3>
                </div>
                <div class="exercise__video">
                    <video width="100%" src="${x.video}" autoplay loop muted></video>
                </div>
                <div class="exercise__context">
                    <ul>
                        ${x.context.join(' ')}
                    </ul>
                </div>
                <div class="exercise__steps">
                    <ul>
                    ${x.steps.join(' ')}
                    </ul>
                </div>
            `;
            exerciseParentContainer.appendChild(exerciseChildContainer)
        })
    }
}

const warmUpFunction = new Post(warmUp)
warmUpFunction.post()
const mainWorkoutFunction = new Post(mainWorkout)
mainWorkoutFunction.post()



// STRETCH PICTURES SLIDESHOW
const arrows = document.querySelector('.arrows');
const imgContiner = arrows.nextElementSibling;
const numberOfImg = imgContiner.children.length;
const width = document.querySelector('.stretch-name').parentElement.clientWidth;
let imgIndex = 1;
let translateX = 0;


arrows.addEventListener('click', (e) => {
    const key = e.target.id;
    if(key === 'previous'){
        if(imgIndex !== 1){
            imgIndex--
            translateX += width;
        }
    } else{
        if(imgIndex !== numberOfImg){
            imgIndex++
            translateX -= width
        }
    }
    imgContiner.style.transform = `translateX(${translateX}px)`;
})
