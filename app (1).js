var TYPES = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];

var TYPE_DESC = {
  INFJ: 'Pattern-seeker with quiet depth. Sees beneath surfaces, carries others without being asked, and builds meaning out of everything.',
  INTJ: 'Strategic and self-directed. Builds toward long-range visions most people cannot see yet, and executes with unusual discipline.',
  INFP: 'Value-driven and quietly intense. Holds convictions deeply and feels everything - which is both the gift and the weight.',
  ENFJ: 'Natural connector and visible leader. Reads rooms and people instinctively, and carries their wellbeing as a personal responsibility.',
  INTP: 'Framework builder. More interested in whether something holds together internally than whether anyone agrees with it.',
  ENTP: 'Idea generator and challenger. Argues to think, not to win - though it often looks the same from the outside.',
  ENTJ: 'Executor and strategist. Builds systems around outcomes and moves fast toward them, often before others have formed a plan.',
  ENFP: 'Possibility-driven and genuinely warm. Finds meaning in people and ideas at speed - finishing things is the harder part.',
  ISTJ: 'Systematic and reliable. Builds carefully on what is proven and holds things together when others lose the thread.',
  ISFJ: 'Quietly devoted. Shows up for people in practical, specific ways that often go unnoticed and unasked-for.',
  ESTJ: 'Organized and direct. Brings structure to chaos and holds people accountable without treating it as personal.',
  ESFJ: 'Warm and socially attuned. Feels responsible for the people around them and acts on it constantly.',
  ISTP: 'Efficient and observant. Solves what is in front of them with precision and minimal noise.',
  ISFP: 'Understated and deeply feeling. Expresses through action and presence more than words.',
  ESTP: 'Fast and action-oriented. Reads situations quickly and moves before others have finished their analysis.',
  ESFP: 'Present and energetic. Brings life into rooms and makes people feel genuinely seen.'
};

var BLIND_SPOTS = {
  INFJ: 'Your Ni builds such a complete internal model that you sometimes stop taking in contradicting data. You are certain not because you have checked, but because the model feels whole.',
  INTJ: 'You execute brilliantly but occasionally in the wrong direction. Ni locks the target, Te builds the route, and neither function is designed to question whether the destination was right.',
  INFP: 'You mistake intensity of feeling for correctness of judgment. A value held deeply is not the same as a value that is right in context.',
  ENFJ: 'You carry emotional responsibility for people who did not ask you to. The help is real but the motive is sometimes about your own discomfort with their situation.',
  INTP: 'Your models are internally consistent but occasionally disconnected from how things actually work. Elegance of framework does not equal accuracy.',
  ENTP: 'You can argue any side with equal conviction. This makes it genuinely difficult to know what you actually believe versus what you are currently performing.',
  ENTJ: 'You treat human problems like logistics problems. People are not inefficiencies to be optimized.',
  ENFP: 'Idea generation is your native language but it doubles as avoidance. The moment a thing gets hard, a new idea appears that is easier.',
  ISTJ: 'You trust precedent over evidence. A past method that worked gets grandfathered in long after the context has changed.',
  ISFJ: 'You say yes to avoid the discomfort of someone else disappointing, not because you have capacity. The resentment accumulates quietly.',
  ESTJ: 'You confuse authority with correctness. The rule exists, therefore it applies - even when it does not.',
  ESFJ: 'You read harmony in the room as truth. If people seem okay, you assume things are okay, even when they are not.',
  ISTP: 'You solve the technical problem and consider the conversation done. The relational layer often remains entirely unaddressed.',
  ISFP: 'You withdraw from conflict so cleanly that people do not realize there is a problem until you are already gone.',
  ESTP: 'You optimize for the present read and underweight what happens downstream. The bold move works until it does not.',
  ESFP: 'The performance of engagement replaces the thing itself. Saying something feels like doing it.'
};

var STACKS = {
  INFJ: {fns:['Ni','Fe','Ti','Se'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your dominant Ni synthesizes experience into meaning before it surfaces. Your Fe then routes that meaning outward.', data:{
    Ni:{name:'Introverted Intuition', what:'Works beneath consciousness, connecting patterns across time and surfacing conclusions that feel more like knowings than deductions. You often understand the end of something before you can explain why.', gives:'Deep foresight, a strong inner compass, and the ability to see what others miss.', aware:'Can trap you in your own head. Builds elaborate internal models that feel true but may not map to reality. Once Ni locks a conclusion, alternatives become hard to genuinely consider.', watch:'Notice when you are mistaking pattern recognition for certainty. When did you last update a belief based on new evidence?'},
    Fe:{name:'Extroverted Feeling', what:'Reads the emotional atmosphere of rooms and relationships and responds to it. Drives the instinct to help, translate, and connect people.', gives:'Genuine empathy, the ability to say the right thing at the right moment, and attunement to relational dynamics most people do not have.', aware:'Can override your own emotional needs. You may find it easier to articulate what others feel than what you feel. You absorb more from difficult environments than you realize.', watch:'Check whether you are helping from genuine care or from discomfort with tension. The motive changes everything.'},
    Ti:{name:'Introverted Thinking', what:'Categorizes, analyzes, and checks for internal consistency. In the tertiary position it is present but unreliable under stress.', gives:'The ability to think through complex systems independently and spot logical inconsistencies.', aware:'Underdeveloped Ti can produce Ni-level confidence on Ti-level reasoning. Also manifests as harsh self-criticism with no real basis.', watch:'When you are tearing apart your own thinking, ask whether that voice is actually rigorous or just mean.'},
    Se:{name:'Extroverted Sensing', what:'Engages the physical, present-moment world. As the inferior function it is the least conscious and most disruptive under stress.', gives:'In healthy expression - the ability to be fully present and take decisive action.', aware:'Under stress shows up as compulsive sensory behavior or uncharacteristic impulsive decisions.', watch:'Compulsive behavior under pressure is a stress signal. Something upstream needs attention.'}
  }},
  INTJ: {fns:['Ni','Te','Fi','Se'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Ni-Te loop drives you from insight directly to strategy, sometimes skipping the Fi layer entirely.', data:{
    Ni:{name:'Introverted Intuition', what:'Synthesizes into long-range patterns that arrive as near-certain knowings rather than step-by-step conclusions. The engine behind INTJ strategic thinking.', gives:'Exceptional foresight, pattern recognition across complex domains, and confidence to commit before others see the case.', aware:'Can produce overconfidence in predictions. New data that contradicts an established internal model often loses.', watch:'When did you last genuinely change your mind about something significant?'},
    Te:{name:'Extroverted Thinking', what:'Organizes the external world through systems, efficiency, and measurable results. Wants outcomes, not process.', gives:'Decisive action, the ability to structure complex plans, and a pull toward mastery.', aware:'Strips the relational texture out of situations. Creates impatience with anything that does not yield visible results.', watch:'Notice whether you are applying Te to a situation that actually needs a different approach.'},
    Fi:{name:'Introverted Feeling', what:'Quiet but firm inner value system that operates below the surface and rarely speaks loudly.', gives:'Authenticity, a personal ethical framework that does not require external validation.', aware:'Emotional needs build up pressure without being named until they overflow.', watch:'Sudden frustration or withdrawal with no clear cause often means something crossed a value you had not consciously named.'},
    Se:{name:'Extroverted Sensing', what:'Inferior function - present-moment engagement and physical action.', gives:'In healthy expression, capacity for decisive action and aesthetic awareness.', aware:'Inferior Se surfaces under stress as compulsive behavior or sudden impulsive decisions.', watch:'Compulsive behavior under pressure signals something higher in your stack needs attention.'}
  }},
  INFP: {fns:['Fi','Ne','Si','Te'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your dominant Fi filters everything through your core value system - how it aligns with who you believe you are.', data:{
    Fi:{name:'Introverted Feeling', what:'The most intensely value-driven of all functions. Continuously evaluates everything against a deep, personal internal framework. Not social emotion - private, specific, deeply felt.', gives:'Authenticity at a level most people never reach, a quiet but unbreakable inner compass.', aware:'Can create emotional isolation. Makes it easy to mistake intensity of feeling for correctness of judgment.', watch:'Ask whether you are making a values-based decision or a feeling-based one. Those are not always the same.'},
    Ne:{name:'Extroverted Intuition', what:'Generates connections, possibilities, and interpretations at high speed. Sees what something could be rather than what it is.', gives:'Creativity, the ability to find meaning in unexpected places, and genuine openness to ideas.', aware:'Without grounding, produces ideation without execution.', watch:'Notice when idea generation has become a way to avoid committing to something.'},
    Si:{name:'Introverted Sensing', what:'Stores and compares present experience against a detailed internal archive of past experience.', gives:'A rich inner world and a long memory for meaningful experiences.', aware:'Can anchor you in past experience in ways that resist change.', watch:'When you feel reluctance toward something new, ask whether Si is pattern-matching to a past experience that may not be relevant.'},
    Te:{name:'Extroverted Thinking', what:'Inferior function - structure, external systems, deadlines, measurable output.', gives:'When developed, the ability to execute and organize at high levels.', aware:'Under stress often shows up as sudden harsh criticism of self or others that feels out of character.', watch:'A sudden critical blaming voice is often inferior Te in stress. It is not your actual perspective.'}
  }},
  ENFJ: {fns:['Fe','Ni','Se','Ti'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Fe absorbs the emotional landscape first. Notice whether your Ni has had space to form its own read.', data:{
    Fe:{name:'Extroverted Feeling', what:'Dominant Fe means your primary mode is through the emotional atmosphere - reading it, managing it, responding to it.', gives:'Natural leadership in human-centered contexts, ability to motivate and connect people, warmth others feel immediately.', aware:'Can cause you to lose yourself in others - absorbing responsibility for emotional states that are not yours to manage.', watch:'Check whether the help you are offering was actually asked for.'},
    Ni:{name:'Introverted Intuition', what:'Auxiliary Ni gives ENFJs their depth - the long-range vision that turns warmth into strategy.', gives:'The ability to see where a person or situation is heading and respond to that future state.', aware:'Ni-Fe can lock onto a vision of what is best for someone and push toward it even when they are not asking.', watch:'Notice when your vision for someone else is about your own discomfort with their current situation.'},
    Se:{name:'Extroverted Sensing', what:'Tertiary Se gives ENFJs engagement with the physical world and capacity for present-moment action.', gives:'Energy, enthusiasm, ability to take quick decisive action.', aware:'Can produce impulsivity, particularly when Ni-Fe is frustrated.', watch:'Impulsive action after an emotional situation is usually tertiary Se running unsupervised.'},
    Ti:{name:'Introverted Thinking', what:'Inferior Ti - internal logical analysis.', gives:'When developed, ability to think independently of social consensus.', aware:'Under stress can produce sudden rigid logic or harsh analytical criticism that feels out of character.', watch:'If you find yourself suddenly detached and harshly analytical in an emotional situation, that is a stress signal.'}
  }},
  INTP: {fns:['Ti','Ne','Si','Fe'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Ti builds the framework, your Ne generates the material - the loop can go a long time without external output.', data:{
    Ti:{name:'Introverted Thinking', what:'Builds elaborate internal logical frameworks. Less interested in external consensus than internal consistency.', gives:'Exceptional analytical depth, ability to build original frameworks, independence from groupthink.', aware:'Without external checking can produce elegant systems that are internally consistent but wrong.', watch:'Notice when you are refining a model instead of testing it against reality.'},
    Ne:{name:'Extroverted Intuition', what:'Auxiliary Ne generates the raw material Ti works with - connections, possibilities, alternative framings.', gives:'Creativity, breadth of interest, ability to see problems from multiple angles.', aware:'Ne-Ti loops - endless conceptual exploration with no grounding in results.', watch:'If you have been thinking about something for weeks without external output, that is probably a loop.'},
    Si:{name:'Introverted Sensing', what:'Tertiary Si provides access to past experience and a pull toward the familiar.', gives:'Ability to draw on accumulated knowledge and build expertise over time.', aware:'Can cause you to stick with established methods even when new approaches would be better.', watch:'Comfort with the familiar is not the same as the familiar being correct.'},
    Fe:{name:'Extroverted Feeling', what:'Inferior Fe - social and emotional attunement.', gives:'When developed, genuine warmth and ability to connect emotionally.', aware:'Under stress surfaces as sudden emotional outbursts or a desperate need for external validation.', watch:'A sudden intense need to know whether someone is upset with you is inferior Fe in stress - a signal, not your baseline.'}
  }},
  ENTP: {fns:['Ne','Ti','Fe','Si'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Ne generates the possibilities, your Ti stress-tests them - the loop can run a long time without landing.', data:{
    Ne:{name:'Extroverted Intuition', what:'Dominant Ne is a constant generator of connections, possibilities, and framings. Treats every conversation as potential raw material.', gives:'Rapid ideation, the ability to see what others miss, contagious intellectual energy.', aware:'Makes finishing things difficult. The next idea is always more interesting than the current one in execution.', watch:'Track the ratio of ideas started to ideas completed. If it is far off, Ne needs a constraint.'},
    Ti:{name:'Introverted Thinking', what:'Auxiliary Ti provides the analytical framework that separates ENTPs from pure idea generators.', gives:'Ability to stress-test ideas rigorously and build internally consistent arguments.', aware:'Ne-Ti can produce a person who argues any position regardless of actual belief.', watch:'Ask whether you actually believe the argument you just made.'},
    Fe:{name:'Extroverted Feeling', what:'Tertiary Fe gives ENTPs social awareness and the ability to read a room.', gives:'Charm, ability to adjust communication style, genuine enjoyment of human connection.', aware:'Can produce the pattern of debating someone in a way that feels like sport to you and like an attack to them.', watch:'Check whether the other person is enjoying this conversation as much as you are.'},
    Si:{name:'Introverted Sensing', what:'Inferior Si - consistency, routine, follow-through.', gives:'When developed, ability to build reliable habits and honor commitments over time.', aware:'Makes routine feel suffocating and long-term consistency a genuine challenge.', watch:'If you have broken the same kind of commitment multiple times, that is Si. Still your responsibility.'}
  }},
  ENTJ: {fns:['Te','Ni','Se','Fi'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Te moves fast toward outcomes while Ni sets the long-range target - the combination is powerful but can leave people behind.', data:{
    Te:{name:'Extroverted Thinking', what:'Dominant Te means your primary orientation is toward results, systems, and external order. You see what needs to happen and you build structures to make it happen.', gives:'Natural command of complex systems, decisive leadership, the ability to move people and resources toward a goal efficiently.', aware:'Reduces everything to outcomes. Emotional and relational complexity registers as inefficiency to be managed rather than reality to be engaged with.', watch:'Notice when you are solving a people problem with a logistics approach. They are not the same problem.'},
    Ni:{name:'Introverted Intuition', what:'Auxiliary Ni provides the long-range vision that gives Te its direction. The combination produces someone who can see where things are heading and build toward it before others understand the goal.', gives:'Strategic depth, ability to commit to a course before proof is available, pattern recognition across complex domains.', aware:'Ni-Te can lock onto a vision and pursue it with such focus that contradicting information stops landing.', watch:'When did you last genuinely revise a long-held conviction based on new data?'},
    Se:{name:'Extroverted Sensing', what:'Tertiary Se gives ENTJs physical presence, situational awareness, and a capacity for decisive action in the moment.', gives:'Confidence in high-pressure environments, aesthetic sensibility, and the ability to read a room beyond just its logic.', aware:'Under stress can produce impulsive decisions or sensory overindulgence as a release valve for the Te-Ni pressure.', watch:'Sudden impulsive behavior after sustained pressure is tertiary Se. It is a signal, not a personality shift.'},
    Fi:{name:'Introverted Feeling', what:'Inferior Fi - the personal value system, emotional needs, and inner world. The least conscious function for ENTJs.', gives:'When developed, a deep personal integrity that gives Te direction beyond pure efficiency.', aware:'Fi needs get suppressed until they overflow. Can surface as unexpected emotional intensity or a sudden sense that something deeply important is being violated.', watch:'If you feel a level of anger or hurt that seems disproportionate, Fi is probably involved. Something crossed a value you had not consciously named.'}
  }},
  ENFP: {fns:['Ne','Fi','Te','Si'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Ne generates possibilities faster than Fi can evaluate them - the challenge is always in the landing, not the launch.', data:{
    Ne:{name:'Extroverted Intuition', what:'Dominant Ne means you live in possibility. Every conversation, situation, and person is raw material for connections and meanings you generate in real time.', gives:'Genuine creativity, warmth that makes people feel seen, the ability to find potential where others see obstacles.', aware:'Ne makes starting easy and finishing hard. It also makes the next idea feel more alive than the current commitment.', watch:'Track how many things you have started versus completed in the last six months. That ratio is data.'},
    Fi:{name:'Introverted Feeling', what:'Auxiliary Fi provides the value anchor behind Ne\'s possibilities. It filters which ideas are actually worth pursuing and gives ENFPs their deep sense of personal integrity.', gives:'Authenticity, emotional depth that goes beyond social warmth, a clear sense of what actually matters.', aware:'Fi and Ne can loop - generating emotionally meaningful possibilities internally without ever making them real.', watch:'Check whether your enthusiasm for an idea is coming from genuine Fi alignment or from Ne excitement that will fade.'},
    Te:{name:'Extroverted Thinking', what:'Tertiary Te gives ENFPs a drive toward structure and completion that can show up inconsistently.', gives:'When developed, the ability to actually execute on what Ne and Fi generate. The missing piece that turns ideas into outcomes.', aware:'Underdeveloped Te produces bursts of intense organization followed by abandonment. All-or-nothing relationship with structure.', watch:'Notice if you are using Te energy on planning the thing instead of doing the thing.'},
    Si:{name:'Introverted Sensing', what:'Inferior Si - routine, consistency, follow-through, physical self-care. The least developed function.', gives:'When developed, the stability to build something over time rather than starting over repeatedly.', aware:'Under stress surfaces as sudden rigid routine, health anxiety, or nostalgia that feels overwhelming.', watch:'If you find yourself suddenly obsessed with a past experience or your physical health under stress, that is inferior Si. Something upstream needs attention.'}
  }},
  ISTJ: {fns:['Si','Te','Fi','Ne'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Si cross-references everything against what has been proven - Te then builds the structure to implement it reliably.', data:{
    Si:{name:'Introverted Sensing', what:'Dominant Si means you process experience by comparing it against a detailed internal archive of what has worked and what has not. You trust what has been tested over time.', gives:'Exceptional reliability, deep competence built through careful accumulation, the ability to maintain systems and standards others let slip.', aware:'Can cause you to trust precedent over evidence. A method that worked before gets applied even when the context has fundamentally changed.', watch:'When you feel resistance to a new approach, ask whether it is because the old way is actually better or because it is familiar.'},
    Te:{name:'Extroverted Thinking', what:'Auxiliary Te gives ISTJs their drive toward structure, efficiency, and measurable results. The combination with Si produces someone who builds reliable, proven systems.', gives:'Clear communication, ability to organize people and processes, commitment to getting things done rather than just planned.', aware:'Si-Te can produce rigidity - the right way to do something becomes the only way, and deviation from it feels wrong regardless of outcome.', watch:'Notice whether the structure you are enforcing is serving the goal or has become the goal.'},
    Fi:{name:'Introverted Feeling', what:'Tertiary Fi provides ISTJs with a quiet but firm personal value system that operates in the background.', gives:'A deep, private sense of integrity and loyalty. ISTJs may not talk about their values but they hold them seriously.', aware:'Fi in tertiary position can surface as unexpected stubbornness around issues that seem minor to others but are deeply important internally.', watch:'When you dig in on something unexpectedly, it is usually Fi. Worth asking what value is actually at stake.'},
    Ne:{name:'Extroverted Intuition', what:'Inferior Ne - the generation of possibilities, alternative framings, and comfort with open-endedness. The least developed function.', gives:'When developed, the ability to see options and adapt when situations change unexpectedly.', aware:'Under stress surfaces as catastrophizing - suddenly seeing all the ways something could go wrong - or uncharacteristic impulsivity.', watch:'Spiraling worst-case thinking under pressure is inferior Ne. Engage Si-Te: what has actually happened, and what specifically can be done?'}
  }},
  ISFJ: {fns:['Si','Fe','Ti','Ne'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Si holds what matters and what has worked, while Fe routes that care outward into consistent, specific support for people.', data:{
    Si:{name:'Introverted Sensing', what:'Dominant Si means you are deeply attuned to what has been - your memories of people, places, and experiences are detailed and meaningful. You notice what others overlook because you are paying close attention.', gives:'Remarkable attentiveness to people\'s specific needs, the ability to build deep familiarity and genuine continuity in relationships, loyalty that is proven through consistent action.', aware:'Can cause you to hold onto past experiences - positive or negative - longer than is useful. Also makes significant change feel genuinely threatening rather than just uncomfortable.', watch:'When you resist something new, ask whether the resistance is about the thing itself or about what it would replace.'},
    Fe:{name:'Extroverted Feeling', what:'Auxiliary Fe routes Si\'s attentiveness outward into care and support for others. ISFJs read emotional atmospheres well and respond to them in practical, specific ways.', gives:'Warmth that feels genuine because it is based on actual knowledge of the person, ability to anticipate needs before they are stated, social grace that puts people at ease.', aware:'Fe makes conflict feel deeply uncomfortable. ISFJs will absorb a lot before naming a problem, which means resentment can build quietly without anyone knowing there is an issue.', watch:'Check whether you are saying yes because you want to or because you cannot tolerate the discomfort of saying no.'},
    Ti:{name:'Introverted Thinking', what:'Tertiary Ti gives ISFJs a quiet analytical capacity that often surprises people who have read them as purely relational.', gives:'The ability to think through systems and spot inconsistencies. When developed, a calm logical check on Fe\'s impulse to smooth everything over.', aware:'In the tertiary position, Ti can produce sudden sharp criticism - of self or others - that feels out of character for someone usually so gentle.', watch:'A sudden cold or critical inner voice is often tertiary Ti. It is a signal that something genuinely does not add up.'},
    Ne:{name:'Extroverted Intuition', what:'Inferior Ne - possibilities, open-endedness, and comfort with change. The least developed function.', gives:'When developed, the ability to adapt when circumstances shift and to see options rather than just risks.', aware:'Under stress surfaces as anxiety about what could go wrong, or sudden uncharacteristic impulsivity as a reaction to feeling trapped.', watch:'Worst-case spiraling is inferior Ne under stress. Return to what is actually known and what specific small action is available right now.'}
  }},
  ESTJ: {fns:['Te','Si','Ne','Fi'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Te pushes toward results while Si anchors to what has proven reliable - together they produce someone who executes consistently and holds standards others let slip.', data:{
    Te:{name:'Extroverted Thinking', what:'Dominant Te means your default orientation is toward order, results, and accountability. You see what needs to be done, build the structure to do it, and expect others to follow through.', gives:'Natural organizational leadership, clarity in communication, the ability to hold systems and people to standards consistently.', aware:'Can produce a style that others experience as blunt or demanding even when you are not trying to be. Also tends to reduce complex human situations to process problems.', watch:'Notice when you are managing a relationship the way you would manage a project. Different tools apply.'},
    Si:{name:'Introverted Sensing', what:'Auxiliary Si gives ESTJs their respect for precedent, procedure, and what has been proven over time. The combination with Te produces someone who builds reliable, tested systems.', gives:'Institutional knowledge, the ability to maintain standards consistently, deep competence built through careful practice.', aware:'Si-Te can become rigid - the established way of doing things gets defended even when the context has changed enough that it no longer serves the original purpose.', watch:'Ask whether you are defending a standard because it is right or because it is familiar. Those are not always the same thing.'},
    Ne:{name:'Extroverted Intuition', what:'Tertiary Ne gives ESTJs occasional access to possibility thinking and flexibility - more than stereotypes of the type suggest.', gives:'The ability to generate alternatives when standard approaches fail, and occasional creative leaps that surprise people who have typed ESTJs as purely procedural.', aware:'Underdeveloped Ne makes change and ambiguity feel threatening rather than interesting. Can also produce tangential thinking that frustrates the Te drive for efficiency.', watch:'When a situation genuinely requires a new approach, Ne is the resource. Practice letting it run before Te evaluates.'},
    Fi:{name:'Introverted Feeling', what:'Inferior Fi - personal values, emotional needs, and inner world. The least conscious function for ESTJs.', gives:'When developed, a deep personal integrity that gives Te direction beyond maintaining structure for its own sake.', aware:'Fi gets suppressed under Te-Si dominance until it overflows. Can surface as unexpectedly intense reactions when a personal value is crossed.', watch:'Disproportionate anger or a sudden sense of having been personally wronged is often inferior Fi. Something was violated that you had not consciously named as important.'}
  }},
  ESFJ: {fns:['Fe','Si','Ne','Ti'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Fe reads and responds to the emotional field while Si anchors you to what has worked - together they produce someone who shows up for people in consistent, specific, reliable ways.', data:{
    Fe:{name:'Extroverted Feeling', what:'Dominant Fe means your primary mode is through the emotional atmosphere of your environment - reading it, maintaining it, and responding to it. You notice how people are doing before they tell you.', gives:'Genuine social warmth, the ability to make people feel genuinely cared for, leadership in maintaining the relational fabric of groups and families.', aware:'Fe can absorb responsibility for other people\'s emotional states. You may feel genuinely responsible for making everyone okay, which is an impossible position.', watch:'Check whether you are managing your own discomfort with someone else\'s unhappiness by trying to fix it for them.'},
    Si:{name:'Introverted Sensing', what:'Auxiliary Si gives ESFJs their reliability and memory for what has worked relationally. You remember what people like, what they have been through, and what they need.', gives:'Consistency, the ability to show up in the same reliable way over time, deep knowledge of the people you care about.', aware:'Si-Fe can produce a tendency to assume that what worked before should work now, and to feel hurt when familiar patterns are rejected.', watch:'When you feel unappreciated, ask whether you offered what was needed or what has worked in the past.'},
    Ne:{name:'Extroverted Intuition', what:'Tertiary Ne gives ESFJs access to possibility thinking that often goes unrecognized.', gives:'Creativity in social situations, the ability to generate options when standard relational approaches are not working.', aware:'Ne in this position can produce anxiety about what could go wrong relationally - running scenarios of conflict or rejection that are not grounded in what is actually happening.', watch:'If you are running worst-case social scenarios in your head, that is Ne anxiety. Return to what is actually known about the situation.'},
    Ti:{name:'Introverted Thinking', what:'Inferior Ti - internal logical analysis independent of social consensus. The least developed function for ESFJs.', gives:'When developed, the ability to evaluate situations on their logical merits rather than their relational temperature.', aware:'Under stress surfaces as sudden cold logic or rigid rule-following that feels out of character. Can produce a harshly critical inner voice that attacks in ways the person would never direct at others.', watch:'A sudden pedantic or cutting inner voice is inferior Ti under pressure. It is not your actual perspective on the situation.'}
  }},
  ISTP: {fns:['Ti','Se','Ni','Fe'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Ti diagnoses the problem precisely while Se gathers real-world data in real time - the combination produces fast, accurate, low-noise problem solving.', data:{
    Ti:{name:'Introverted Thinking', what:'Dominant Ti means your primary mode is analysis - taking things apart to understand exactly how they work. You build internal frameworks for everything and trust them over external authority.', gives:'Exceptional diagnostic ability, mechanical and systems thinking that operates at a level others cannot match, calm precision under pressure.', aware:'Ti can produce detachment that others read as coldness. Also tends to consider a problem solved once the mechanism is understood, even when relational or emotional dimensions remain.', watch:'When you have explained the logical solution and the other person is still upset, the problem you solved was not the one they had.'},
    Se:{name:'Extroverted Sensing', what:'Auxiliary Se gives ISTPs their direct engagement with the physical world. You read your environment in real time and respond to what is actually happening rather than what should be happening.', gives:'Exceptional situational awareness, the ability to act decisively under pressure, a practical competence with tools and physical systems.', aware:'Ti-Se can produce a style that is highly effective in the moment and less interested in long-range planning or consistency over time.', watch:'Notice whether you are solving for right now or for what this situation will require three months from now.'},
    Ni:{name:'Introverted Intuition', what:'Tertiary Ni gives ISTPs occasional flashes of long-range pattern recognition and strategic insight that can seem incongruous with their present-focused style.', gives:'Depth beneath the surface competence. ISTPs often see more than they say and understand more than they demonstrate.', aware:'Ni in tertiary position can produce sudden hunches or convictions that are hard to explain and not always reliable. Worth checking against Se data.', watch:'When you have a strong gut sense about where something is heading, ask what observable evidence supports it.'},
    Fe:{name:'Extroverted Feeling', what:'Inferior Fe - social and emotional attunement, the relational layer, the need for connection. The least developed function.', gives:'When developed, genuine warmth and the ability to communicate care in ways others can receive.', aware:'Under stress surfaces as sudden emotional outbursts or - the opposite - an intense need for approval that feels out of character.', watch:'A sudden intense need to know whether someone is upset with you, or an unexpected emotional reaction, is inferior Fe. Something in the relational environment needs attention.'}
  }},
  ISFP: {fns:['Fi','Se','Ni','Te'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Fi holds what you value with quiet intensity while Se keeps you present and engaged - you express yourself through what you do and create more than what you say.', data:{
    Fi:{name:'Introverted Feeling', what:'Dominant Fi means everything is filtered through a deep, personal value system first. You know what you care about and what you will not compromise, even when you cannot always articulate it.', gives:'Authenticity that others feel immediately, a strong internal compass, the ability to stay true to yourself under social pressure.', aware:'Fi processes internally and privately. Others may not know there is a problem until you have already made a decision about it. Conflict gets absorbed rather than addressed.', watch:'Notice when you are withdrawing from something instead of naming what is wrong. The other person often genuinely does not know there is an issue.'},
    Se:{name:'Extroverted Sensing', what:'Auxiliary Se keeps ISFPs present, engaged with their physical environment, and expressed through action, craft, and sensory experience.', gives:'Aesthetic sensitivity, the ability to be fully present in experience, practical skill with physical and creative work.', aware:'Fi-Se can make the internal world vivid enough that external commitments and follow-through feel less urgent.', watch:'Check whether your presence in experience is grounding you or letting you avoid things that need forward attention.'},
    Ni:{name:'Introverted Intuition', what:'Tertiary Ni gives ISFPs quiet depth and occasional flashes of insight about where things are heading that surface unexpectedly.', gives:'Depth beneath the gentle surface. ISFPs often understand patterns and dynamics they do not advertise.', aware:'Ni in tertiary position can produce brooding - running a situation through internally until a conclusion hardens, sometimes without enough external data.', watch:'When you have quietly decided how something is going to go, ask what you actually know versus what you have projected.'},
    Te:{name:'Extroverted Thinking', what:'Inferior Te - external structure, systems, deadlines, measurable output. The least developed function.', gives:'When developed, the ability to organize and execute in ways that make Fi\'s values real in the world.', aware:'Under stress surfaces as sudden harsh criticism - of self or others - that feels completely out of character.', watch:'A sharp, blaming inner voice or sudden cutting criticism directed outward is inferior Te under pressure. It is a signal that something needs attention, not an accurate read of the situation.'}
  }},
  ESTP: {fns:['Se','Ti','Fe','Ni'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Se reads what is happening right now with exceptional accuracy while Ti diagnoses it fast - the result is someone who acts decisively and correctly in situations others are still processing.', data:{
    Se:{name:'Extroverted Sensing', what:'Dominant Se means you are fully tuned to what is happening in your immediate environment. You read people, situations, and physical reality in real time with a precision that others lack.', gives:'Exceptional situational awareness, the ability to act in high-pressure environments without freezing, a natural read of social dynamics as they unfold.', aware:'Se orientation is toward now. Planning, long-range consequences, and consistency over time do not come as naturally as reading and responding to the present moment.', watch:'Notice when the bold move that is correct for this moment creates a downstream cost you did not model. Both things can be true.'},
    Ti:{name:'Introverted Thinking', what:'Auxiliary Ti gives ESTPs their analytical edge - the fast internal diagnosis that separates them from people who act impulsively without understanding what they are responding to.', gives:'The ability to read a situation accurately and respond appropriately rather than just quickly. Mechanical and systems intelligence.', aware:'Se-Ti can produce a style that is highly confident and often right, which makes it harder to notice when it is wrong.', watch:'Ask when you last updated a read on a situation or person based on new information. Confidence and accuracy are not the same thing.'},
    Fe:{name:'Extroverted Feeling', what:'Tertiary Fe gives ESTPs genuine social awareness and charm - an ability to read and work a room that goes beyond pure Se situational awareness.', gives:'The ability to connect with people across contexts, natural persuasion, social flexibility.', aware:'Fe in tertiary position can produce a tendency to use social skill instrumentally - reading what people want to hear and providing it, without a deep relationship to the actual relational content.', watch:'Check whether your engagement with someone is genuine or performative. You can often feel the difference if you look.'},
    Ni:{name:'Introverted Intuition', what:'Inferior Ni - long-range pattern recognition, the ability to see where things are heading over time, and comfort with abstraction. The least developed function.', gives:'When developed, the strategic depth to pair with Se\'s tactical excellence.', aware:'Under stress surfaces as sudden doom-thinking, paranoia about hidden motives, or an obsessive sense that something is deeply wrong without being able to name what.', watch:'Paranoid or catastrophizing thinking that appears suddenly and without clear grounding is inferior Ni. Return to what is observable and what is actually known.'}
  }},
  ESFP: {fns:['Se','Fi','Te','Ni'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your Se brings you fully into the present moment while Fi ensures what you engage with actually means something to you - the combination produces someone who is both alive in the moment and genuinely caring.', data:{
    Se:{name:'Extroverted Sensing', what:'Dominant Se means your natural home is the present moment. You engage fully with what is happening now - people, environments, experiences - with an immediacy and enthusiasm that is genuinely felt.', gives:'The ability to make people feel genuinely seen and included, natural comfort in social situations, presence that others find energizing.', aware:'Se dominance can make the future feel abstract and planning feel like a drain on the present. Consequences that are not immediately visible are easy to underweight.', watch:'Notice the difference between being present and using presence to avoid forward-looking attention that something actually needs.'},
    Fi:{name:'Introverted Feeling', what:'Auxiliary Fi gives ESFPs their depth - a personal value system that ensures Se engagement is not just performance but actually matters to them.', gives:'Genuine warmth rather than social performance, a clear sense of personal values, emotional depth beneath the energetic surface.', aware:'Fi-Se can produce a pattern where feelings are expressed through behavior and experience rather than words, which means others may not understand what is actually happening internally.', watch:'Practice naming what you value and what you need rather than demonstrating it and hoping people pick it up.'},
    Te:{name:'Extroverted Thinking', what:'Tertiary Te gives ESFPs a drive toward results and structure that shows up inconsistently but is genuinely there.', gives:'When developed, the ability to organize and follow through on what Se and Fi care about.', aware:'Te in tertiary position can produce all-or-nothing relationship with structure - either highly organized or completely scattered, with not much middle ground.', watch:'Small consistent structure serves ESFPs better than elaborate systems. One reliable habit beats ten ambitious plans.'},
    Ni:{name:'Introverted Intuition', what:'Inferior Ni - long-range pattern recognition, abstract thinking, and comfort with planning for futures that are not yet visible. The least developed function.', gives:'When developed, the strategic depth to give Se direction beyond the immediate moment.', aware:'Under stress surfaces as doom-thinking, sudden paranoia about hidden agendas, or an overwhelming sense that something is about to go wrong without clear evidence.', watch:'Sudden overwhelming anxiety about the future or suspicion about people\'s motives is inferior Ni under stress. Name it as a stress response and return to what is actually known.'}
  }}
};

var STUB_STACK = {fns:['Dom','Aux','Ter','Inf'], roles:['Dominant','Auxiliary','Tertiary','Inferior'], lens:'your cognitive stack shapes how you process experience in ways that are both strength and blind spot.', data:{Dom:{name:'Dominant function',what:'Full breakdown for this type coming soon.',gives:'',aware:'',watch:''},Aux:{name:'Auxiliary function',what:'',gives:'',aware:'',watch:''},Ter:{name:'Tertiary function',what:'',gives:'',aware:'',watch:''},Inf:{name:'Inferior function',what:'',gives:'',aware:'',watch:''}}};

var GROWTH = {
  INFJ: {
    healthy:{title:'Healthy INFJ',points:['Ni and Fe work in balance - deep insight is channeled outward with genuine care, not compulsion.','Holds boundaries without guilt. Helps because they want to, not because the discomfort of not helping is unbearable.','Uses Ti to self-check: questions their own conclusions rather than treating Ni certainty as fact.','Present in the physical world. Can act decisively without overplanning.','Comfortable with not being understood. Does not need external validation for internal convictions.','Deep one-on-one connections that are mutual - not just the INFJ carrying the relationship.']},
    unhealthy:{title:'Unhealthy INFJ',points:['Ni-Fe loop: increasingly certain internal visions with no external reality check. Becomes isolated and rigid.','Martyrdom pattern - absorbs everyone else emotional weight, then resents the people they chose to carry.','Withdraws entirely when overwhelmed rather than communicating needs. The famous INFJ door slam.','Harsh Ti self-criticism that has no logical basis - tears apart their own thinking without building anything better.','Inferior Se breaks through as impulsive out-of-character behavior: spending, substance use, sudden recklessness.','Mistakes the strength of an internal feeling for the accuracy of a conclusion about the external world.']},
    growth:{title:'The growth edge',points:['Learn to distinguish Ni insight from Ni wishful thinking. They feel identical from the inside.','Practice asking for what you need before you reach the point of resentment.','Let Ti challenge your conclusions before you commit to them fully.','Build a relationship with your Se - exercise, physical presence, direct action - before stress forces it.','Separate your identity from your helpfulness. You are not what you do for people.']}
  },
  INTJ: {
    healthy:{title:'Healthy INTJ',points:['Ni and Te work toward something genuinely meaningful - not just efficient, but worth building.','Allows Fi to surface and name what actually matters to them, not just what makes strategic sense.','Holds their vision with confidence but updates it when evidence demands it.','Capable of genuine warmth with people who have earned trust. Not cold - selective.','Uses Se healthily: present in the body, decisive in the moment, not paralyzed by future planning.','Acknowledges the emotional reality of situations without treating it as inefficiency.']},
    unhealthy:{title:'Unhealthy INTJ',points:['Ni-Te loop: executes brilliantly toward increasingly narrow and unexamined goals.','Arrogance pattern - certainty calcifies into contempt for anyone who processes differently.','Fi ignored until it explodes: sudden emotional outbursts or unexpected withdrawal that confuses others.','Inferior Se as recklessness or sensory compulsion - the tight control breaks and swings hard the other way.','Treats every interpersonal problem as a logistics problem. Alienates people without understanding why.','Vision becomes dogma - no new information actually lands.']},
    growth:{title:'The growth edge',points:['Ask when you last genuinely changed your mind. If you cannot remember, that is the answer.','Fi is not weakness - knowing what you actually value makes your execution more coherent, not less.','Find one relationship where you are not the most competent person in the room. Sit with that.','Let Se exist: physical presence, sensory pleasure, acting before the plan is complete.']}
  },
  INFP: {
    healthy:{title:'Healthy INFP',points:['Fi is clear and directed - knows what it values and acts from that place without endless second-guessing.','Ne generates ideas that Fi then commits to. The loop closes into real output.','Si provides grounding - draws on past experience and builds real expertise over time.','Comfortable with imperfection. Produces work and releases it rather than holding it internally.','Relationships are honest - the INFP communicates their inner world rather than expecting others to sense it.','Te develops enough to execute: structures their time, meets commitments, finishes things.']},
    unhealthy:{title:'Unhealthy INFP',points:['Fi echo chamber - values become increasingly private and removed from reality. Nobody can reach them.','Idealization and disappointment cycle: people and projects get elevated, then fail the standard, then get abandoned.','Ne-Fi loop: generates meaning and possibility internally with no external output or accountability.','Inferior Te explosion: sudden harsh criticism of self or others after long suppression.','Passive withdrawal instead of communication. Others are expected to intuit what went wrong.','Perfectionism that prevents starting or finishing - the internal vision is always better than what could be made.']},
    growth:{title:'The growth edge',points:['The internal vision does not count until it is external. Something made imperfectly is worth more than something imagined perfectly.','Tell people what you need. Your inner world is not as visible as it feels from inside.','Te is not the enemy of authenticity - structure is what lets the authentic thing actually exist in the world.','Let Si build: do the same thing repeatedly until you are genuinely good at it.']}
  },
  ENFJ: {
    healthy:{title:'Healthy ENFJ',points:['Fe and Ni in balance - genuinely reads people AND has an independent long-range view that is not just a reflection of what others want.','Helps from abundance, not from anxiety about what happens if they do not.','Ni provides the spine: knows where things are actually heading and says so, even if it is not what people want to hear.','Ti developed enough to self-check: can distinguish their read of a situation from the actual situation.','Capable of receiving help. The giving is not a control mechanism.','Their warmth is specific and earned - not applied uniformly to manage every room they enter.']},
    unhealthy:{title:'Unhealthy ENFJ',points:['Fe dominance without Ni check: reads and manages emotional atmospheres compulsively, losing themselves entirely.','Needs to be needed - creates dependencies in others, consciously or not.','Ni-Fe vision of what someone should be overrides what that person actually wants for themselves.','Inferior Ti as sudden cold logic or pedantry - particularly when they feel manipulated or disrespected.','Exhaustion as identity: the martyr who keeps going until they collapse, then resents the people they served.','Cannot tolerate conflict - smooths over real problems to restore the surface appearance of harmony.']},
    growth:{title:'The growth edge',points:['Ask whether your help was requested. The answer changes the ethics of the situation.','Develop a view that does not require agreement to hold. Ni without Fe input sometimes.','Let Ti be uncomfortable: your read of a situation might be wrong. Build the habit of checking.','Your needs are not an imposition. Stating them is not selfishness.']}
  },
  INTP: {
    healthy:{title:'Healthy INTP',points:['Ti builds frameworks that get tested externally, not just refined internally.','Ne generates material that Ti actually commits to evaluating - the loop produces output.','Fe developed enough to care about impact: considers how conclusions land on real people.','Si provides grounding: can build consistent habits and honor long-term commitments.','Comfortable with not knowing - holds frameworks provisionally and updates them.','Can communicate their thinking in a way that others can actually follow and use.']},
    unhealthy:{title:'Unhealthy INTP',points:['Ti-Ne loop: increasingly elaborate internal frameworks that are never tested. Certainty without contact with reality.','Arrogance about intelligence as a substitute for actually doing anything with it.','Inferior Fe explosion: suppressed need for connection breaks through as sudden emotional outburst or hypersensitive reaction to perceived rejection.','Procrastination as perfectionism - the analysis never ends because completing something makes it judgeable.','Social withdrawal until basic needs go unmet. The loop becomes total.','Dismisses emotional reality in situations as irrelevant noise. Gets blindsided by what they missed.']},
    growth:{title:'The growth edge',points:['A framework you cannot explain to someone else is not finished. External communication is part of the thinking.','Fe is information, not contamination. What people feel about something is data.','Pick one thing and finish it before the next idea. Completion is a skill Ti does not build naturally.','Let Si work: the same discipline applied daily produces something Ti ideation alone never will.']}
  },
  ENTP: {
    healthy:{title:'Healthy ENTP',points:['Ne generates, Ti evaluates, and something actually gets built or decided.','Genuine intellectual honesty: can distinguish what they believe from what they are performing.','Fe developed enough to track how their engagement lands on others - not just whether it is interesting to them.','Can commit to a direction without needing it to be the optimal direction.','Uses debate as thinking, not as dominance. Knows when to stop.','Follows through on commitments even when something more interesting has appeared.']},
    unhealthy:{title:'Unhealthy ENTP',points:['Ne-Ti loop: ideas and analysis that never produce anything. Brilliance as a permanent holding pattern.','Debates to win rather than to think. Uses superior verbal facility to dominate rather than explore.','Chronic unfinished projects. Si fails entirely - no follow-through, no consistency.','Fe blindspot: genuinely does not register that what feels like sport to them feels like an attack to others.','Inferior Si as sudden rigid routine or hypochondria under sustained stress.','Commitment avoidance dressed up as keeping options open.']},
    growth:{title:'The growth edge',points:['Pick the idea and stay. Optionality is a real cost, not just a benefit.','Ask whether the person you are debating is enjoying it. Adjust based on the answer.','Si is not death - consistency and follow-through are what let the ideas become anything real.','Fe is not soft. Knowing how you land on people makes you more effective, not less.']}
  },
  ENTJ: {
    healthy:{title:'Healthy ENTJ',points:['Te is in service of something genuinely worth building, not just in service of efficiency.','Fi is acknowledged: knows what actually matters to them beyond performance and outcome.','Holds the vision but updates it. New evidence changes the direction, not just the tactics.','Warmth with people who have earned trust. Not absent - selective and real.','Uses Se healthily: present in the body, able to enjoy the moment rather than only planning the next one.','Can receive pushback without treating it as incompetence or disloyalty.']},
    unhealthy:{title:'Unhealthy ENTJ',points:['Te-Ni loop: brilliant execution toward increasingly unexamined goals. Efficiency in service of nothing meaningful.','Contempt for anyone who processes differently. Impatience calcifies into condescension.','Fi suppressed until it overflows: sudden intense reactions that confuse people who have only seen the controlled surface.','Every interpersonal conflict is treated as a logistics problem to be solved rather than a relationship to be maintained.','Inferior Fi as identity crisis when achievement no longer feels like enough.','Vision becomes immune to correction. No data lands that contradicts the internal model.']},
    growth:{title:'The growth edge',points:['Ask what you are actually building toward and whether it is worth it. Te without Fi direction is just motion.','Fi is not weakness - it is the function that makes your goals worth having.','Let people push back. A plan that survives challenge is stronger. One that cannot is a liability.','Se is not distraction. Physical presence, rest, and enjoyment are how you sustain the execution long-term.']}
  },
  ENFP: {
    healthy:{title:'Healthy ENFP',points:['Ne generates possibilities that Fi actually commits to - the loop closes into something real.','Can finish things. Not everything, but enough. Has developed a relationship with completion.','Fi is clear: knows what it actually values versus what is just exciting right now.','Te developed enough to structure time and honor commitments without it feeling like a cage.','Relationships are honest - does not just radiate warmth but actually shows up consistently.','Si has been developed enough to build real expertise: the same thing done repeatedly until it is genuinely good.']},
    unhealthy:{title:'Unhealthy ENFP',points:['Ne-Fi loop: endless generation of meaningful possibilities that never become anything external.','Chronic non-completion. Every project abandoned at the point of difficulty when the next idea appears.','Fi idealism produces cycles of intense connection followed by disappointment when reality fails the standard.','Inferior Si as sudden rigid routine or health anxiety under sustained pressure.','Uses warmth and social fluency to avoid the discomfort of being known rather than just liked.','Commits to things from excitement and disappoints people by not following through.']},
    growth:{title:'The growth edge',points:['The idea is not the thing. The made thing is the thing. Practice finishing.','Te is not betraying your authenticity - it is what lets your authentic values actually exist in the world.','Distinguish Ne excitement from Fi alignment. They feel similar at first and diverge later.','Build one small Si habit and keep it. That single consistency will anchor everything else.']}
  },
  ISTJ: {
    healthy:{title:'Healthy ISTJ',points:['Si-Te builds toward things that actually matter, not just toward what is familiar and proven.','Can update when evidence demands it. Precedent informs the decision rather than making it.','Fi is acknowledged: has a clear sense of personal values beyond duty and reliability.','Ne developed enough to see options when standard approaches hit their limits.','Warmth that is specific and genuine - expressed through consistent action rather than performance.','Can communicate what they need rather than absorbing silently and expecting others to notice.']},
    unhealthy:{title:'Unhealthy ISTJ',points:['Precedent over evidence. The old way is defended long after the context has made it obsolete.','Duty as identity: takes on obligations until resentment builds, then continues anyway.','Fi ignored: has needs and values that are never named until they overflow as unexpected stubbornness or withdrawal.','Inferior Ne as catastrophizing - spiraling worst-case thinking when uncertainty increases.','Rigidity dressed as reliability. Refuses adaptation under the banner of standards.','Holds others to the same internal standard without communicating what that standard is.']},
    growth:{title:'The growth edge',points:['Reliability is a genuine strength. The growth edge is knowing when the situation has changed enough that it needs a new approach.','Fi needs to be named before it overflows. What do you actually value, beyond what you are supposed to do?','Ne is not chaos - it is options. Practice entertaining a new approach before dismissing it.','You do not have to carry everything silently. Stating what you need is not weakness.']}
  },
  ISFJ: {
    healthy:{title:'Healthy ISFJ',points:['Fe gives genuinely rather than from fear of what happens if they do not.','Boundaries exist and are communicated before resentment builds.','Si knowledge of people is used to serve them rather than to predict and manage them.','Ti developed enough to catch and name when something does not add up.','Can receive care as readily as they give it.','Needs are named before they reach the overflow point.']},
    unhealthy:{title:'Unhealthy ISFJ',points:['Yes becomes the only answer because no feels too dangerous. Resentment accumulates silently.','Fe absorbs responsibility for emotional states that are not theirs to manage.','Si attachment to the past prevents honest engagement with what is actually true now.','Inferior Ne as anxiety spirals: all the ways something could go wrong, running on loop.','Conflict avoided so completely that real problems are never named and never addressed.','Self-erasure in the name of service. Their own needs become invisible even to themselves.']},
    growth:{title:'The growth edge',points:['No is a complete sentence. Practice using it before you reach capacity.','Your needs matter with the same weight as other people\'s. That is not selfishness - it is accurate.','Ti is the function that lets you know when something is genuinely wrong rather than just uncomfortable. Develop it.','Si is a gift but it can hold you in a past version of a person or situation. Ask what is actually true right now.']}
  },
  ESTJ: {
    healthy:{title:'Healthy ESTJ',points:['Te in service of something worth building - not just structure for its own sake.','Si is a resource, not a cage. Uses precedent to inform without being bound by it.','Fi is acknowledged: has personal values that are distinct from duty and procedure.','Can hear pushback without treating it as insubordination.','Warmth that is specific and genuine, expressed through consistent accountability.','Ne has been developed enough to generate real options when standard approaches fail.']},
    unhealthy:{title:'Unhealthy ESTJ',points:['Authority confused with correctness. The rule applies because it is the rule, not because it is right.','Si-Te rigidity: the established method defended past the point where it is serving anything.','Fi suppressed until it overflows as unexpected intense reaction to a crossed value.','People managed like processes. Relational complexity treated as inefficiency.','Inferior Fi as sudden identity crisis when external structure fails or is removed.','Holds others to standards that were never communicated and cannot be questioned.']},
    growth:{title:'The growth edge',points:['Ask whether you are enforcing a standard because it is right or because it is established. The answer matters.','Fi knows what you actually value. Give it enough room to inform the direction, not just the execution.','Pushback from people is data. A plan that cannot survive challenge is not as solid as it felt.','Ne is not chaos - it is options. Practice letting it run before Te shuts it down.']}
  },
  ESFJ: {
    healthy:{title:'Healthy ESFJ',points:['Gives from abundance rather than from anxiety about what happens if they do not.','Fe reads the room accurately without absorbing responsibility for fixing everyone in it.','Si knowledge of people is used in genuine service, not to anticipate and manage.','Ti developed enough to know when something is genuinely wrong rather than just tense.','Can state personal needs without it feeling like an imposition.','Warmth that is specific and earned - not uniformly applied to every situation.']},
    unhealthy:{title:'Unhealthy ESFJ',points:['Harmony maintained at the cost of honesty. Real problems smoothed over until they are too large to ignore.','Fe absorbs responsibility for everyone\'s emotional state in the room.','Si attachment to how things should be done makes genuine change feel like a personal rejection.','Inferior Ti as sudden cold critical logic or harsh internal voice that feels completely out of character.','Needs are never stated. Others are expected to intuit and reciprocate without being asked.','Conflict avoided so completely that the relationship never has the honest conversation it needs.']},
    growth:{title:'The growth edge',points:['Harmony is valuable. Honesty is necessary. When they conflict, honesty is the deeper form of care.','Your needs exist. Stating them is not demanding - it is giving people accurate information.','Ti is the function that lets you know when something does not add up. Develop it and trust it.','Not every emotional atmosphere in the room is yours to fix. Some things need to be felt, not managed.']}
  },
  ISTP: {
    healthy:{title:'Healthy ISTP',points:['Ti diagnoses accurately and Se responds effectively - the loop produces real results, not just clever analysis.','Acknowledges the relational dimension of situations even when it is not the most interesting part.','Ni has been developed enough to model downstream consequences, not just immediate solutions.','Fe developed enough to communicate care in ways others can actually receive.','Can commit to follow-through even when the interesting problem has been solved.','Independence that is genuine rather than defensive.']},
    unhealthy:{title:'Unhealthy ISTP',points:['Problem solved = conversation over. The relational or emotional layer is left entirely unaddressed.','Detachment that others experience as coldness or indifference, regardless of intent.','Ti certainty: once the framework is built, contradicting information stops landing.','Inferior Fe as sudden emotional outburst or unexpected intense need for approval that feels completely out of character.','Commitment avoidance dressed as self-sufficiency.','Present-moment focus at the expense of anything that requires sustained attention over time.']},
    growth:{title:'The growth edge',points:['Solving the technical problem is not the same as solving the problem. The relational layer is often the actual problem.','Fe is not performance. Communicating that you care, in ways the other person can receive, is a skill worth building.','Ni models consequences. Practice running the tape forward before acting, not just diagnosing what is in front of you.','Consistency over time is a different kind of competence than situational excellence. Both matter.']}
  },
  ISFP: {
    healthy:{title:'Healthy ISFP',points:['Fi knows what it values and acts from that clarity without excessive second-guessing.','Se keeps them present and engaged rather than withdrawn into the internal world.','Can name what they need rather than withdrawing and hoping others figure it out.','Ni developed enough to anticipate consequences without becoming a source of dread.','Te developed enough to follow through on what Fi cares about.','Conflict is addressed directly rather than resolved through disappearance.']},
    unhealthy:{title:'Unhealthy ISFP',points:['Conflict withdrawn from so cleanly that others do not know there is a problem until the relationship is already over.','Fi values so privately held that no one can know what is wrong or what is needed.','Inferior Te as sudden harsh criticism of self or others after long silent absorption.','Se-Fi loop: present experience and internal feeling with no external output or accountability.','Expectations that others will intuit needs that have never been stated.','Brooding Ni that decides how something will go long before enough evidence is in.']},
    growth:{title:'The growth edge',points:['Name it before you disappear. Most people genuinely cannot tell something is wrong until you say so.','Your values are not self-evident to others. Communicating them is not oversharing - it is giving people a chance.','Te is not the enemy of authenticity. Structure is what lets what you care about actually exist in the world.','Ni projections feel like insight. Check them against what is actually observable.']}
  },
  ESTP: {
    healthy:{title:'Healthy ESTP',points:['Se reads the present accurately and Ti diagnoses it correctly - action is both fast and well-calibrated.','Models downstream consequences before acting, not just immediate reads.','Fe developed enough to track how engagement lands on others, not just what is happening situationally.','Can commit to follow-through even when the interesting situation has passed.','Ni developed enough to hold a longer-range perspective alongside the present-moment excellence.','Honesty that is direct without being indifferent to impact.']},
    unhealthy:{title:'Unhealthy ESTP',points:['Bold move optimized for now at the cost of what happens downstream.','Se-Ti confidence: reads situations correctly often enough that it becomes hard to notice when it is wrong.','Fe blindspot: social reading used instrumentally without genuine engagement with the relational layer.','Inferior Ni as sudden doom-thinking or paranoia about hidden motives when stress increases.','Commitment avoidance dressed as adaptability.','Present-focus so complete that sustained effort becomes genuinely difficult.']},
    growth:{title:'The growth edge',points:['The present read matters. So does what happens three months from now. Develop both.','Being right frequently makes it harder to notice when you are wrong. Stay curious about that.','Fe is not soft. Knowing how you land on people makes you more effective, not less.','Ni is the function that lets you see where something is heading. Build it deliberately rather than waiting for stress to surface it.']}
  },
  ESFP: {
    healthy:{title:'Healthy ESFP',points:['Se presence is genuine rather than performative - actually there, not just appearing to be.','Fi provides depth: knows what it values and acts from that place rather than just responding to whatever is most alive in the moment.','Can follow through on commitments even when the energy of the initial moment has faded.','Te developed enough to build simple structures that make what Se and Fi care about sustainable.','Ni developed enough to hold some forward-looking perspective alongside the present-moment focus.','Warmth that is specific and earned, not uniformly applied.']},
    unhealthy:{title:'Unhealthy ESFP',points:['Performance of engagement replaces actual engagement. Saying feels like doing.','Se-Fi loop: full presence in experience without external follow-through or accountability.','Inferior Ni as sudden overwhelming anxiety about the future or paranoia about others\' motives.','Commitment patterns: high initial enthusiasm, genuine difficulty sustaining as the novelty fades.','Fi values expressed through behavior and expected to be intuited, never named.','Avoidance of anything that requires sustained effort or discomfort.']},
    growth:{title:'The growth edge',points:['Presence is a genuine strength. The growth edge is what happens after the moment - follow-through is where it becomes real.','Name what you value and what you need. Demonstrating it and hoping people pick it up is not the same as communicating.','Ni is not doom - it is foresight. Develop it enough to hold a longer view without it becoming anxiety.','One consistent small structure serves better than periodic intense organization. Build the habit that sticks, not the system that impresses.']}
  }
};

var STUB_GROWTH = {
  healthy:{title:'Healthy version',points:['Full growth breakdown for this type coming soon.']},
  unhealthy:{title:'Unhealthy version',points:['Full growth breakdown for this type coming soon.']},
  growth:{title:'The growth edge',points:['Full growth breakdown for this type coming soon.']}
};

var GLOSSARY = [
  {sym:'Ni', name:'Introverted Intuition', body:'Synthesizes patterns and future trajectories beneath conscious thought. Produces insights that arrive as certainty rather than steps. Can feel like knowing something before you can explain it.', positions:[
    {role:'Dominant', badge:'b-dom', text:'The primary lens. Life is experienced as pattern and meaning. Tendency toward single-minded vision and deep foresight. Risk of mistaking internal model for external reality. (INFJ, INTJ)'},
    {role:'Auxiliary', badge:'b-aux', text:'Provides strategic depth behind a primary function. Adds long-range vision to action or feeling. Less total absorption than dominant Ni. (ENFJ, ENTJ)'},
    {role:'Tertiary', badge:'b-ter', text:'Available but inconsistent. Can produce flashes of pattern recognition or sudden hunches that are not always reliable. (ISFP, ISTP)'},
    {role:'Inferior', badge:'b-inf', text:'Least conscious. Under stress may surface as paranoia, doom-thinking, or an obsessive need to find hidden meaning. (ESFP, ESTP)'}
  ]},
  {sym:'Ne', name:'Extroverted Intuition', body:'Generates connections, possibilities, and alternative framings in real time. Sees what something could be more naturally than what it is. Finds ideas everywhere.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Constant idea generation, genuine openness to possibility, difficulty committing to one path. High creativity, low follow-through by default. (ENFP, ENTP)'},
    {role:'Auxiliary', badge:'b-aux', text:'Adds creative flexibility and breadth to a primary function. More targeted than dominant Ne. (INFP, INTP)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent. Can produce bursts of creativity or sudden connections. May manifest as tangents or unexpected pivots. (ESFJ, ESTJ)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress surfaces as anxiety about missing possibilities or sudden uncharacteristic impulsivity. (ISFJ, ISTJ)'}
  ]},
  {sym:'Si', name:'Introverted Sensing', body:'Stores and compares present experience against a detailed internal archive of past experience. Values continuity, precedent, and what has been proven. Gives a strong memory for meaningful personal experience.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Life experienced through comparison to established experience. Strong reliability and attention to detail. Risk of overvaluing precedent when context has changed. (ISFJ, ISTJ)'},
    {role:'Auxiliary', badge:'b-aux', text:'Grounds a primary function in past experience and concrete reality. Adds dependability and connection to the familiar. (ESFJ, ESTJ)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent access to personal history and sensory memory. Can show up as nostalgia or sudden comfort-seeking. (INTP, INFP)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress may surface as obsessive attention to physical symptoms, sensory overwhelm, or sudden rigid routine. (ENTP, ENFP)'}
  ]},
  {sym:'Se', name:'Extroverted Sensing', body:'Engages the physical, present-moment world directly. Reads environment and action in real time. Oriented toward what is immediate, tangible, and happening now.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Fully present and action-oriented. High physical and situational awareness. Less orientation toward abstraction or future planning. (ESFP, ESTP)'},
    {role:'Auxiliary', badge:'b-aux', text:'Grounds abstract thinking in concrete action. Adds decisiveness and physical presence to a primary function. (ISFP, ISTP)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent. Can produce sudden aesthetic awareness or bursts of decisive action, particularly under frustration. (ENFJ, ENTJ)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress may surface as compulsive sensory behavior, impulsive decisions, or a sudden urge to act recklessly. (INFJ, INTJ)'}
  ]},
  {sym:'Fi', name:'Introverted Feeling', body:'Maintains a deep, personal, internal value system that evaluates everything against its own moral and emotional framework. Not primarily social - this is private, specific, and strongly felt. The source of authenticity.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Everything is filtered through personal values first. Deep authenticity, difficulty with external pressure to compromise. Risk of mistaking intensity of feeling for correctness. (INFP, ISFP)'},
    {role:'Auxiliary', badge:'b-aux', text:'Provides a value anchor behind a primary function. Adds ethical depth and personal integrity without total absorption. (ENFP, ESFP)'},
    {role:'Tertiary', badge:'b-ter', text:'Quiet but drawing firm lines. In stress or growth can surface as sudden strong conviction or withdrawal around values. (INTJ, ISTJ)'},
    {role:'Inferior', badge:'b-inf', text:'Least conscious. Under stress may surface as sudden emotional outbursts, hypersensitivity to criticism, or desperate need to be seen as a good person. (ENTJ, ESTJ)'}
  ]},
  {sym:'Fe', name:'Extroverted Feeling', body:'Reads and responds to the emotional atmosphere of groups and relationships. Oriented toward harmony, connection, and the wellbeing of others. The source of warmth and social attunement.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Primary mode is through emotional atmosphere - absorbing, managing, and responding. High empathy and social leadership. Risk of absorbing responsibility for others states. (ENFJ, ESFJ)'},
    {role:'Auxiliary', badge:'b-aux', text:'Adds warmth and relational awareness behind a primary function. More targeted than dominant Fe. (INFJ, ISFJ)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent social attunement. Can show up as unexpected warmth or sudden people-pleasing under stress. (ENTP, ESTP)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress surfaces as sudden emotional outbursts, extreme sensitivity to perceived rejection, or desperate need for social approval. (INTP, ISTP)'}
  ]},
  {sym:'Ti', name:'Introverted Thinking', body:'Builds and evaluates internal logical frameworks. Interested in whether something holds together on its own terms, independent of external agreement. The source of analytical precision.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Primary mode is through internal logic. Builds original frameworks, resists groupthink. Risk of elegant systems that are disconnected from reality. (INTP, ISTP)'},
    {role:'Auxiliary', badge:'b-aux', text:'Adds analytical rigor behind a primary function. Grounds intuition or perception in careful thinking. (ENTP, ESTP)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent logical checking. Can show up as bursts of categorization or sudden sharp criticism. (INFJ, ISFJ)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress surfaces as rigid pedantic logic, harsh criticism that feels out of character, or sudden cold detachment. (ENFJ, ESFJ)'}
  ]},
  {sym:'Te', name:'Extroverted Thinking', body:'Organizes the external world through systems, efficiency, and measurable outcomes. Oriented toward what works, what produces results, and what can be structured and optimized.', positions:[
    {role:'Dominant', badge:'b-dom', text:'Primary mode is through external organization and results. Decisive, structured, impatient with inefficiency. Risk of reducing complex situations to logistics. (ENTJ, ESTJ)'},
    {role:'Auxiliary', badge:'b-aux', text:'Adds execution and structure behind a primary function. Grounds vision or values in concrete action. (INTJ, ISTJ)'},
    {role:'Tertiary', badge:'b-ter', text:'Intermittent drive toward structure and results. Can show up as sudden organizational efforts or blunt direct communication under pressure. (ENFP, ESFP)'},
    {role:'Inferior', badge:'b-inf', text:'Under stress surfaces as harsh criticism, sudden obsession with productivity, or feeling deeply inadequate at executing. (INFP, ISFP)'}
  ]}
];

var QUIZ = [
  {q:'After a long social day, what do you need most?', sub:'Think about how you actually recharge - not how you wish you did.', opts:[
    {t:'Quiet time alone to reset.', s:{I:2}},
    {t:'Low-key time with a couple of close people.', s:{E:1,F:1}},
    {t:'Some space and then I am ready again.', s:{I:1}},
    {t:'I get energy from it - usually the last to leave.', s:{E:2}}
  ]},
  {q:'When making a big decision, what drives you most?', sub:'Be honest about what actually happens, not what should.', opts:[
    {t:'Logic and analysis - I build a framework and follow it.', s:{T:2}},
    {t:'How it feels and whether it aligns with what I value.', s:{F:2}},
    {t:'Both - I factor in logic and gut.', s:{T:1,F:1}},
    {t:'My gut. I usually know before I can explain why.', s:{N:1,I:1}}
  ]},
  {q:'How do you approach the unknown?', sub:'', opts:[
    {t:'Make a plan - I feel better once there is structure.', s:{J:2,S:1}},
    {t:'Stay open - too much planning kills possibility.', s:{P:2,N:1}},
    {t:'Research until I am confident enough to move.', s:{J:1,T:1}},
    {t:'Sit with it. Uncertainty is information too.', s:{I:1,N:1}}
  ]},
  {q:'How do you think best?', sub:'', opts:[
    {t:'In patterns and connections - I jump between ideas.', s:{N:2}},
    {t:'Concretely and practically - I care about what works.', s:{S:2}},
    {t:'Deeply and systematically - I build models internally.', s:{N:1,I:1}},
    {t:'Through people and stories - abstractions need grounding.', s:{S:1,F:1}}
  ]},
  {q:'When something important goes wrong, your first move is...', sub:'', opts:[
    {t:'Figure out what failed and fix the system.', s:{T:2,J:1}},
    {t:'Process the feeling, then deal with the facts.', s:{F:2}},
    {t:'Understand it deeply before doing anything.', s:{I:1,N:1}},
    {t:'Move fast - act now, reflect later.', s:{E:1,S:1,P:1}}
  ]}
];

// Blank slate - no demo entries
var entries = [];

var userType = null;
var quizIdx = 0;
var quizScores = {};
var quizAnswered = [];
var multiSel = [];
var jMode = 'write';
var learnTab = 'stack';
var currentTab = 'journal';

function typeFromScores(s) {
  return ((s.E||0)>(s.I||0)?'E':'I')+((s.N||0)>(s.S||0)?'N':'S')+((s.T||0)>(s.F||0)?'T':'F')+((s.J||0)>(s.P||0)?'J':'P');
}

function getStack() { return STACKS[userType] || STUB_STACK; }

function buildTypeGrid(id, multi) {
  var g = document.getElementById(id);
  g.innerHTML = '';
  TYPES.forEach(function(t) {
    var b = document.createElement('button');
    b.className = 'type-btn';
    b.textContent = t;
    if (multi) {
      b.onclick = function() {
        b.classList.toggle('sel');
        multiSel = Array.from(document.querySelectorAll('#tg-multi .type-btn.sel')).map(function(x){return x.textContent;});
        document.getElementById('btn-quiz').disabled = multiSel.length === 0;
        document.getElementById('multi-hint').textContent = multiSel.length ? multiSel.length + ' selected - continue to narrow down' : 'Select one or more';
      };
    } else {
      b.onclick = function() {
        document.querySelectorAll('#tg-know .type-btn').forEach(function(x){x.classList.remove('sel');});
        b.classList.add('sel');
        userType = t;
        document.getElementById('btn-start').disabled = false;
      };
    }
    g.appendChild(b);
  });
}

buildTypeGrid('tg-know', false);
buildTypeGrid('tg-multi', true);

function setMode(m) {
  document.getElementById('m-know').classList.toggle('active', m === 'know');
  document.getElementById('m-unsure').classList.toggle('active', m === 'unsure');
  document.getElementById('sec-know').style.display = m === 'know' ? 'block' : 'none';
  document.getElementById('sec-unsure').style.display = m === 'unsure' ? 'block' : 'none';
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  var el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function startQuiz() {
  quizIdx = 0; quizScores = {}; quizAnswered = [];
  renderQuiz();
  showPage('p-quiz');
}

function renderQuiz() {
  var q = QUIZ[quizIdx];
  document.getElementById('quiz-q').textContent = q.q;
  document.getElementById('quiz-sub').textContent = q.sub;
  var oo = document.getElementById('quiz-opts');
  oo.innerHTML = '';
  q.opts.forEach(function(o, i) {
    var b = document.createElement('button');
    b.className = 'q-opt' + (quizAnswered[quizIdx] === i ? ' sel' : '');
    b.textContent = o.t;
    b.onclick = function() {
      quizAnswered[quizIdx] = i;
      Object.keys(o.s).forEach(function(k){ quizScores[k] = (quizScores[k]||0) + o.s[k]; });
      document.querySelectorAll('.q-opt').forEach(function(x){x.classList.remove('sel');});
      b.classList.add('sel');
      setTimeout(function() {
        if (quizIdx < QUIZ.length - 1) { quizIdx++; renderQuiz(); } else { showResult(); }
      }, 280);
    };
    oo.appendChild(b);
  });
  var pp = document.getElementById('quiz-prog');
  pp.innerHTML = '';
  QUIZ.forEach(function(_, i) {
    var p = document.createElement('div');
    p.className = 'q-pip' + (i < quizIdx ? ' done' : i === quizIdx ? ' cur' : '');
    pp.appendChild(p);
  });
}

function showResult() {
  userType = typeFromScores(quizScores);
  document.getElementById('res-type').textContent = userType;
  document.getElementById('res-desc').textContent = TYPE_DESC[userType] || '';
  var s = getStack();
  var badges = ['b-dom','b-aux','b-ter','b-inf'];
  var html = '<div class="c-lbl">' + userType + ' cognitive stack</div>';
  s.fns.forEach(function(f, i) {
    var border = i === s.fns.length - 1 ? 'border:none' : '';
    html += '<div style="display:flex;gap:8px;align-items:center;padding:7px 0;border-bottom:.5px solid var(--border);' + border + '"><span class="fn-badge ' + badges[i] + '">' + s.roles[i] + '</span><span style="font-size:14px;font-weight:500">' + f + '</span></div>';
  });
  document.getElementById('res-stack').innerHTML = html;
  showPage('p-result');
}

function startApp() {
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  document.getElementById('main-app').style.display = 'block';
  document.getElementById('main-nav').style.display = 'flex';
  document.getElementById('tab-journal').classList.add('active');
  document.getElementById('s-type').textContent = userType;
  document.getElementById('ex-your-type').textContent = userType;
  document.getElementById('blind-spot').textContent = BLIND_SPOTS[userType] || '';
  buildStreak();
  buildLearn();
  buildExplore();
  buildHistory();
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('#main-app .page').forEach(function(p){p.style.display='none';p.classList.remove('active');});
  var el = document.getElementById('tab-' + tab);
  el.style.display = 'block';
  el.classList.add('active');
  var tabs = ['journal','learn','explore','history','dashboard'];
  document.querySelectorAll('.nav-item').forEach(function(n, i){
    n.classList.toggle('active', tabs[i] === tab);
  });
}

function setJMode(m) {
  jMode = m;
  document.getElementById('jm-write').classList.toggle('active', m === 'write');
  document.getElementById('jm-scenario').classList.toggle('active', m === 'scenario');
  document.getElementById('jv-write').style.display = m === 'write' ? 'block' : 'none';
  document.getElementById('jv-scenario').style.display = m === 'scenario' ? 'block' : 'none';
  document.getElementById('insight-out').innerHTML = '';
}

function buildStreak() {
  var today = new Date();
  var ordered = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  var weekStart = new Date(today);
  weekStart.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  var row = document.getElementById('streak-row');
  row.innerHTML = '';
  ordered.forEach(function(d, i) {
    var dayDate = new Date(weekStart);
    dayDate.setDate(weekStart.getDate() + i);
    var ds = dayDate.toISOString().split('T')[0];
    var hasEntry = entries.some(function(e){return e.date === ds;});
    var isToday = ds === today.toISOString().split('T')[0];
    var dot = document.createElement('div');
    dot.className = 's-dot' + (hasEntry ? ' done' : isToday ? ' today' : '');
    dot.textContent = hasEntry ? String.fromCharCode(10003) : d;
    row.appendChild(dot);
  });
}

function setLearnTab(t) {
  learnTab = t;
  document.querySelectorAll('.l-tab').forEach(function(b, i) {
    b.classList.toggle('active', ['stack','glossary','growth'][i] === t);
  });
  document.getElementById('lv-stack').style.display = t === 'stack' ? 'block' : 'none';
  document.getElementById('lv-glossary').style.display = t === 'glossary' ? 'block' : 'none';
  document.getElementById('lv-growth').style.display = t === 'growth' ? 'block' : 'none';
}

function buildLearn() {
  document.getElementById('learn-title').textContent = userType + ' cognitive stack';
  var stack = getStack();
  var badges = ['b-dom','b-aux','b-ter','b-inf'];
  var sc = document.getElementById('lv-stack');
  sc.innerHTML = '';
  stack.fns.forEach(function(fn, i) {
    var d = stack.data[fn];
    if (!d || !d.what) return;
    var card = document.createElement('div');
    card.className = 'fn-card';
    var h = '<span class="fn-badge ' + badges[i] + '">' + stack.roles[i] + ' - ' + fn + '</span>';
    h += '<div class="fn-name serif">' + d.name + '</div>';
    if (d.what) h += '<div class="fn-sec"><div class="fn-sec-lbl">What it is</div><p>' + d.what + '</p></div>';
    if (d.gives) h += '<div class="fn-sec"><div class="fn-sec-lbl">What it gives you</div><p>' + d.gives + '</p></div>';
    if (d.aware) h += '<div class="fn-sec"><div class="fn-sec-lbl">What to be aware of</div><p>' + d.aware + '</p></div>';
    if (d.watch) h += '<div class="fn-sec"><div class="fn-sec-lbl">Watch for this</div><p class="fn-watch">' + d.watch + '</p></div>';
    card.innerHTML = h;
    sc.appendChild(card);
  });
  var gc = document.getElementById('lv-glossary');
  gc.innerHTML = '<p style="font-size:14px;color:var(--text2);margin-bottom:16px;line-height:1.6">The eight cognitive functions - what each one is and how it changes based on where it sits in a stack.</p>';
  GLOSSARY.forEach(function(fn) {
    var card = document.createElement('div');
    card.className = 'gloss-fn';
    var posHTML = '';
    fn.positions.forEach(function(p) {
      posHTML += '<div class="pos-item"><span class="fn-badge ' + p.badge + ' pos-badge">' + p.role + '</span><span class="pos-text">' + p.text + '</span></div>';
    });
    card.innerHTML = '<div class="gloss-symbol">' + fn.sym + '</div><div class="gloss-name">' + fn.name + '</div><p class="gloss-body">' + fn.body + '</p><div class="fn-sec-lbl" style="margin-bottom:8px">By position</div><div class="pos-row">' + posHTML + '</div>';
    gc.appendChild(card);
  });
  buildGrowth();
}

function buildGrowth() {
  var g = GROWTH[userType] || STUB_GROWTH;
  var container = document.getElementById('lv-growth');
  container.innerHTML = '';
  var sections = [
    {data: g.healthy, bg: 'var(--green-l)', border: '#7DC4A0', dot: 'var(--green)'},
    {data: g.unhealthy, bg: 'var(--red-l)', border: '#E8A0A0', dot: 'var(--red)'},
    {data: g.growth, bg: 'var(--purple-l)', border: 'var(--purple-m)', dot: 'var(--purple)'}
  ];
  sections.forEach(function(s) {
    var card = document.createElement('div');
    card.className = 'fn-card';
    card.style.borderColor = s.border;
    var items = '';
    s.data.points.forEach(function(p) {
      items += '<div class="growth-point"><div class="growth-dot" style="background:' + s.dot + '"></div><div class="growth-text">' + p + '</div></div>';
    });
    card.innerHTML = '<div class="fn-name serif">' + s.data.title + '</div><div style="background:' + s.bg + ';border-radius:var(--rs);padding:14px;margin-top:4px">' + items + '</div>';
    container.appendChild(card);
  });
}

function buildExplore() {
  var g = document.getElementById('ex-type-grid');
  g.innerHTML = '';
  TYPES.forEach(function(t) {
    var b = document.createElement('button');
    b.className = 'ex-btn';
    b.textContent = t;
    b.onclick = function() {
      document.querySelectorAll('.ex-btn').forEach(function(x){x.classList.remove('sel');});
      b.classList.add('sel');
      loadExploreDetail(t);
    };
    g.appendChild(b);
  });
}

function loadExploreDetail(type) {
  var det = document.getElementById('ex-detail');
  det.innerHTML = '<div class="card"><div class="insight-hdr">Loading</div><div class="loader"><span></span><span></span><span></span></div></div>';
  var stack = STACKS[type] || STUB_STACK;
  var stackStr = stack.fns.map(function(f, i){return stack.roles[i] + ': ' + f;}).join(', ');
  var userStack = getStack();
  var userStackStr = userStack.fns.map(function(f, i){return userStack.roles[i] + ': ' + f;}).join(', ');
  var isSelf = type === userType;
  var systemPrompt = 'You give concise MBTI type breakdowns from a neutral, psychologically honest standpoint. You understand cognitive functions deeply. Respond ONLY with a JSON object, no markdown, no backticks. Format: {"overview":"2-3 sentences neutral description of this type core operating mode","strengths":"2 sentences on genuine strengths","shadow":"2 sentences on their real blind spots","dynamic":"2 sentences on the general dynamic between ' + userType + ' and ' + type + '","working":"2-3 sentences on how ' + userType + ' can best work with ' + type + ' - specific and practical","friction":"1-2 sentences on where conflict typically happens between these two types"}';
  var userPrompt = 'Give me the breakdown for ' + type + ' (stack: ' + stackStr + ') from the perspective of ' + userType + ' (stack: ' + userStackStr + ')';
  callAI(systemPrompt, userPrompt, function(err, raw) {
    if (err || !raw) {
      det.innerHTML = '<div class="card"><p style="font-size:14px;color:var(--text2);line-height:1.7">' + (TYPE_DESC[type]||'') + '</p><p style="font-size:12px;color:var(--text3);margin-top:10px">AI detail unavailable. Check your API connection.</p></div>';
      return;
    }
    raw = raw.replace(/```json|```/g,'').trim();
    var d = {};
    try { d = JSON.parse(raw); } catch(e){}
    var html = '<div class="card"><div class="c-lbl">' + type + ' - overview</div><p style="font-size:14px;color:var(--text);line-height:1.75;margin-bottom:12px">' + (d.overview||TYPE_DESC[type]||'') + '</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div style="background:var(--green-l);border-radius:var(--rs);padding:12px"><div class="fn-sec-lbl" style="margin-bottom:5px">Strengths</div><p style="font-size:13px;line-height:1.6">' + (d.strengths||'') + '</p></div><div style="background:var(--amber-l);border-radius:var(--rs);padding:12px"><div class="fn-sec-lbl" style="margin-bottom:5px">Blind spots</div><p style="font-size:13px;line-height:1.6">' + (d.shadow||'') + '</p></div></div></div>';
    if (!isSelf) {
      html += '<div class="card"><div class="c-lbl">' + userType + ' + ' + type + ' dynamic</div><p style="font-size:14px;line-height:1.75;margin-bottom:14px">' + (d.dynamic||'') + '</p><div style="background:var(--purple-l);border-radius:var(--rs);padding:14px;margin-bottom:10px"><div class="fn-sec-lbl" style="margin-bottom:6px">How to work with them</div><p style="font-size:13px;color:#2D2580;line-height:1.7">' + (d.working||'') + '</p></div><div style="background:var(--red-l);border-radius:var(--rs);padding:14px"><div class="fn-sec-lbl" style="margin-bottom:6px">Where friction happens</div><p style="font-size:13px;color:var(--red);line-height:1.7">' + (d.friction||'') + '</p></div></div>';
    }
    det.innerHTML = html;
  });
}

function buildHistory() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth();
  document.getElementById('month-lbl').textContent = now.toLocaleDateString('en-US',{month:'long',year:'numeric'});
  var grid = document.getElementById('month-grid');
  grid.innerHTML = '';
  ['Su','Mo','Tu','We','Th','Fr','Sa'].forEach(function(d){
    var l = document.createElement('div'); l.className = 'm-day-lbl'; l.textContent = d; grid.appendChild(l);
  });
  var first = new Date(y,m,1).getDay();
  var days = new Date(y,m+1,0).getDate();
  var todayStr = now.toISOString().split('T')[0];
  for (var i=0; i<first; i++) { var e = document.createElement('div'); e.className='day-cell'; grid.appendChild(e); }
  for (var day=1; day<=days; day++) {
    var cell = document.createElement('div');
    var ds = y + '-' + String(m+1).padStart(2,'0') + '-' + String(day).padStart(2,'0');
    var entry = entries.find(function(e){return e.date===ds;});
    var isToday = ds === todayStr;
    cell.className = 'day-cell' + (isToday?' tod':'') + (entry?(entry.excluded?' priv':' ai'):'');
    cell.textContent = day;
    grid.appendChild(cell);
  }
  var list = document.getElementById('entries-list');
  list.innerHTML = '';
  if (entries.length === 0) {
    list.innerHTML = '<p style="font-size:14px;color:var(--text3);text-align:center;padding:20px 0">No entries yet. Start journaling to see your history.</p>';
    return;
  }
  entries.slice().reverse().forEach(function(entry) {
    var el = document.createElement('div'); el.className = 'entry-row';
    var dd = new Date(entry.date + 'T12:00:00');
    el.innerHTML = '<div class="e-date">' + dd.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}) + '</div><div class="e-preview">' + (entry.excluded ? '(private - excluded from AI)' : entry.text) + '</div><span class="e-tag ' + (entry.excluded?'tag-priv':'tag-ai') + '">' + (entry.excluded?'private':'AI insight') + '</span>';
    list.appendChild(el);
  });
}

// ─── API SETUP ───────────────────────────────────────────────────────────────
// LOCAL DEV: Set USE_DIRECT = true and paste your key in DEV_API_KEY.
// PRODUCTION (Vercel): Leave USE_DIRECT = false. Set ANTHROPIC_API_KEY in
//   Vercel dashboard → Project Settings → Environment Variables.
//   Never commit a real key here.
var USE_DIRECT = false;
var DEV_API_KEY = '';

function callAI(systemPrompt, userContent, callback) {
  if (USE_DIRECT) {
    fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': DEV_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:1000, system:systemPrompt, messages:[{role:'user',content:userContent}]})
    }).then(function(r){return r.json();}).then(function(data){
      var text = (data.content && data.content[0] && data.content[0].text) || '';
      callback(null, text);
    }).catch(function(e){ callback(e, null); });
  } else {
    fetch('/api/insight', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({system: systemPrompt, userContent: userContent})
    }).then(function(r){return r.json();}).then(function(data){
      var text = (data.content && data.content[0] && data.content[0].text) || '';
      callback(null, text);
    }).catch(function(e){ callback(e, null); });
  }
}

function submitFreeWrite() {
  var text = document.getElementById('entry-input').value.trim();
  var excl = document.getElementById('excl-tog').checked;
  if (!text) return;
  var out = document.getElementById('insight-out');
  var today = new Date().toISOString().split('T')[0];
  if (excl) {
    entries.push({date:today, text:text, excluded:true});
    out.innerHTML = '<div class="private-card">Saved privately. No AI insight generated - this one stays with you.</div>';
    document.getElementById('s-entries').textContent = parseInt(document.getElementById('s-entries').textContent) + 1;
    buildStreak();
    buildHistory();
    return;
  }
  out.innerHTML = '<div class="insight-card"><div class="insight-hdr">Generating insight</div><div class="loader"><span></span><span></span><span></span></div></div>';
  document.getElementById('btn-submit').disabled = true;
  var stack = getStack();
  var stackStr = stack.fns.map(function(f,i){return stack.roles[i]+': '+f;}).join(', ');
  var lens = stack.lens || 'your cognitive stack shapes how you process experience.';
  var domFn = stack.fns[0] || '?';
  var sys = 'You are a personal growth journal assistant with deep knowledge of MBTI cognitive functions. The user is ' + userType + '. Stack: ' + stackStr + '. Key lens: ' + lens + '\n\nGive one paragraph of genuine specific insight about what they wrote. Reference their actual cognitive functions by name. Focus on blind spots, what is driving the feeling, what their type typically does in this situation. Be honest and direct. 3-5 sentences. Second person, conversational.';
  callAI(sys, text, function(err, insight) {
    if (err || !insight) {
      out.innerHTML = '<div class="insight-card"><p style="font-size:13px;color:var(--text2)">Could not reach AI. Check your connection or API setup.</p></div>';
    } else {
      out.innerHTML = '<div class="insight-card"><div class="insight-hdr">Insight - through your ' + domFn + ' lens</div><p>' + insight + '</p></div>';
      entries.push({date:today, text:text, excluded:false});
      document.getElementById('s-entries').textContent = parseInt(document.getElementById('s-entries').textContent) + 1;
      document.getElementById('s-streak').textContent = parseInt(document.getElementById('s-streak').textContent) + 1;
      buildStreak();
      buildHistory();
    }
    document.getElementById('btn-submit').disabled = false;
  });
}

function submitScenario() {
  var s1 = document.getElementById('sc-1').value.trim();
  var s2 = document.getElementById('sc-2').value.trim();
  var s3 = document.getElementById('sc-3').value.trim();
  if (!s1) return;
  var out = document.getElementById('insight-out');
  out.innerHTML = '<div class="insight-card"><div class="insight-hdr">Analysing your situation</div><div class="loader"><span></span><span></span><span></span></div></div>';
  document.getElementById('btn-scenario').disabled = true;
  var stack = getStack();
  var stackStr = stack.fns.map(function(f,i){return stack.roles[i]+': '+f;}).join(', ');
  var lens = stack.lens || '';
  var domFn = stack.fns[0] || '?';
  var sys = 'You are a cognitive function-based situation analyst. The user is ' + userType + '. Stack: ' + stackStr + '. Lens: ' + lens + '\n\nGiven a three-part situation, respond ONLY with JSON (no markdown, no backticks): {"whats_happening":"2-3 sentences on what is actually going on beneath the surface","your_type_lens":"2-3 sentences on how ' + userType + ' cognitive stack is shaping their experience","blind_spot":"1-2 sentences on what their type probably cannot see clearly","options":[{"label":"Option A label","description":"What this involves and what it trades off"},{"label":"Option B label","description":"What this involves and what it trades off"}],"recommended":"1-2 sentences on what actually makes sense given their type strengths"}';
  var content = 'What happened: ' + s1 + '\n\nMy reaction: ' + (s2||'Not provided') + '\n\nWhat I want: ' + (s3||'Not provided');
  callAI(sys, content, function(err, raw) {
    if (err || !raw) {
      out.innerHTML = '<div class="insight-card"><p style="font-size:13px;color:var(--text2)">Could not reach AI. Check your connection or API setup.</p></div>';
      document.getElementById('btn-scenario').disabled = false;
      return;
    }
    raw = raw.replace(/```json|```/g,'').trim();
    var d = {};
    try { d = JSON.parse(raw); } catch(e){}
    var optHTML = '';
    (d.options||[]).forEach(function(o) {
      optHTML += '<div style="background:var(--surface2);border-radius:var(--rs);padding:12px;margin-bottom:8px"><div style="font-size:12px;font-weight:500;color:var(--text2);margin-bottom:4px">' + (o.label||'Option') + '</div><p style="font-size:13px;line-height:1.6">' + (o.description||'') + '</p></div>';
    });
    out.innerHTML =
      '<div class="insight-card" style="margin-top:10px"><div class="insight-hdr">What is actually happening</div><p>' + (d.whats_happening||'') + '</p></div>' +
      '<div class="card" style="margin-top:8px"><div class="c-lbl">Through your ' + domFn + ' lens</div><p style="font-size:14px;line-height:1.75;margin-bottom:12px">' + (d.your_type_lens||'') + '</p><div style="background:var(--amber-l);border-radius:var(--rs);padding:12px"><div class="fn-sec-lbl" style="margin-bottom:4px">What you probably cannot see clearly</div><p style="font-size:13px;color:var(--amber);line-height:1.65">' + (d.blind_spot||'') + '</p></div></div>' +
      '<div class="card" style="margin-top:8px"><div class="c-lbl">Your options</div>' + optHTML + '</div>' +
      '<div class="card" style="margin-top:8px;background:var(--purple-l);border-color:var(--purple-m)"><div class="c-lbl" style="color:var(--purple)">What actually makes sense for you</div><p style="font-size:14px;color:#2D2580;line-height:1.75">' + (d.recommended||'') + '</p></div>';
    document.getElementById('btn-scenario').disabled = false;
  });
}
