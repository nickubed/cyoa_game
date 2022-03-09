//Your Code here
// After filling out your "firstAnswer" on the browser end, test this code in your browser's devtools console by typing: "console.log(firstAnswer)"
let firstAnswer = window.prompt('Do you head left or right?')

// We can make a boolean comparison to check if the user's answer matches a specific string:
console.log(firstAnswer === 'left')

// Now we can use an "if" statement to prescribe conditions that handle specific inputs:

if(firstAnswer === 'left'){
    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to for you to crawl through. Do you follow it, or continue on your path?')
    // Here's where we start to "branch" our conditionals...
    if(secondAnswer === 'follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        // finally, after the third answer in this conditional branch, we resolve the story. In this case, we have used window.confirm instead of .prompt, as window.confirm does not provide a text input for the user.
        // window.alert will also work for this purpose!

        if(thirdAnswer === 'stay'){
            window.confirm('You live happily among the cats for the rest of your days.')
        } else if(thirdAnswer === 'spread the word'){
            window.confirm('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }
    } else if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
        if(thirdAnswer === 'ladder'){
            window.confirm('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
        } else if(thirdAnswer === 'staircase'){
            window.confirm('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
        }
    }
} else if (firstAnswer === 'right') {
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')
    if(secondAnswer === 'past the dragon'){
        let thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:')
        if(thirdAnswer === 'stay'){
            window.confirm('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
        } else if(thirdAnswer === 'Run'){
            window.confirm('Quickly, you run back to the caves entrance. Sheepish, you return home.')
        }
        // below, we see an example of a solution the bonus prompt of using the "or" operator. Test this by trying to answer this question with "Away" instead of "away from the dragon".
    } else if(secondAnswer === 'away from the dragon' || secondAnswer === 'away'){
        let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide that you must either draw it or pick it. Which do you do?')
        if(thirdAnswer === 'draw'){
            window.confirm('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the darwing home, somewaht disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
        } else if(thirdAnswer === 'pick'){
            window.confirm('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
        }
    }
}

