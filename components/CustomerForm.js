import {Form, Button} from 'semantic-ui-react';

const options = [
    { key: 'o', text: '', value: 'Other' },
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
const yesNo = [
    { key: 'o', text: '', value: 'Other' },
    { key: 'y', text: 'Yes', value: 'yes' },
    { key: 'n', text: 'No', value: 'no' },
]
const states = [
    { key: 'o', text: '', value: 'Other' },
    { key: 'al', text: 'Alabama', value: 'alabama' },
    { key: 'ak', text: 'Alaska', value: 'alaska' },
    { key: 'az', text: 'Arizona', value: 'arizona' },
    { key: 'ar', text: 'Arkansas', value: 'arkansas' },
    { key: 'ca', text: 'California', value: 'California' },
    { key: 'co', text: 'Colorado', value: 'colorado' },
    { key: 'ct', text: 'Connecticut', value: 'connecticut' },
    { key: 'de', text: 'Delaware', value: 'delaware' },
    { key: 'fl', text: 'Florida', value: 'florida' },
    { key: 'ga', text: 'Georgia', value: 'georgia' },
    { key: 'hi', text: 'Hawaii', value: 'hawaii' },
    { key: 'id', text: 'Idaho', value: 'idaho' },
    { key: 'il', text: 'Illinois', value: 'illinois' },
    { key: 'in', text: 'Indiana', value: 'indiana' },
    { key: 'ia', text: 'Iowa', value: 'iowa' },
    { key: 'ks', text: 'Kansas', value: 'kansas' },
    { key: 'ky', text: 'Kentucky[E]', value: 'kentucky[e]' },
    { key: 'la', text: 'Louisiana', value: 'louisiana' },
    { key: 'me', text: 'Maine', value: 'maine' },
    { key: 'md', text: 'Maryland', value: 'maryland' },
    { key: 'ma', text: 'Massachusetts[E]', value: 'massachusetts[e]' },
    { key: 'mi', text: 'Michigan', value: 'michigan' },
    { key: 'mn', text: 'Minnesota', value: 'minnesota' },
    { key: 'ms', text: 'Mississippi', value: 'mississippi' },
    { key: 'mo', text: 'Missouri', value: 'missouri' },
    { key: 'mt', text: 'Montana', value: 'montana' },
    { key: 'ne', text: 'Nebraska', value: 'nebraska' },
    { key: 'nv', text: 'Nevada', value: 'nevada' },
    { key: 'nh', text: 'New Hampshire', value: 'new hampshire' },
    { key: 'nj', text: 'New Jersey', value: 'new jersey' },
    { key: 'nm', text: 'New Mexico', value: 'new mexico' },
    { key: 'ny', text: 'New York', value: 'new york' },
    { key: 'nc', text: 'North Carolina', value: 'north carolina' },
    { key: 'nd', text: 'North Dakota', value: 'north dakota' },
    { key: 'oh', text: 'Ohio', value: 'ohio' },
    { key: 'ok', text: 'Oklahoma', value: 'oklahoma' },
    { key: 'or', text: 'Oregon', value: 'oregon' },
    { key: 'pa', text: 'Pennsylvania[E]', value: 'pennsylvania[e]' },
    { key: 'ri', text: 'Rhode Island[F]', value: 'rhode island[f]' },
    { key: 'sc', text: 'South Carolina', value: 'south carolina' },
    { key: 'sd', text: 'South Dakota', value: 'south dakota' },
    { key: 'tn', text: 'Tennessee', value: 'tennessee' },
    { key: 'tx', text: 'Texas', value: 'texas' },
    { key: 'ut', text: 'Utah', value: 'utah' },
    { key: 'vt', text: 'Vermont', value: 'vermont' },
    { key: 'va', text: 'Virginia[E]', value: 'virginia[e]' },
    { key: 'wa', text: 'Washington', value: 'washington' },
    { key: 'wv', text: 'West Virginia', value: 'west virginia' },
    { key: 'wi', text: 'Wisconsin', value: 'wisconsin' },
    { key: 'wy', text: 'Wyoming', value: 'wyoming' }
]

export default () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input fluid label={`Dog's name`} placeholder='Name' />
            <Form.Input fluid label='Age' placeholder='Age' />
            <Form.Input fluid label='Breed' placeholder='Breed' />
            <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
            />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label={`Drop off date`} type='date'/>
            <Form.Input fluid label={`Turn over date`} type='date'/>
        </Form.Group>
        <h2>SECTION A: ISSUES (PLEASE CHECK ALL THAT APPLY)</h2>
        <Form.Group widths='equal'>
        <Form.Checkbox label='*Dog Aggression' />
        <Form.Checkbox label='*Human Aggression' />
            <Form.Checkbox label='*Fearful' />
            <Form.Checkbox label='Leash Pulling' />
            
            <Form.Checkbox label='Doesnt Listen When Called' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Checkbox label='*Toy Aggression' />
            <Form.Checkbox label='*Food Aggression' />
            <Form.Checkbox label='*Separation Anxiety' />
            <Form.Checkbox label='Barking' />
            <Form.Checkbox label='Listen Sometimes' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Checkbox label='Counter Surfing' />
            <Form.Checkbox label='Lunging at Dogs' />
            <Form.Checkbox label='Lunging at People' />
            <Form.Checkbox label='Jumping' />
            <Form.Checkbox label='Improper House Manners' />
        </Form.Group>
        <p>
            * any of the above listed concerns may require us to spend more
            time on working these issues so advanced commands maybe taken
            out of the program* these can be added to your training after the
            dog is home with you for the three week adjustment time.
        </p>
        <p>
            *Aggression, fearful, and anxiety issues will be addressed during the
            training and we will continue to work with you and your dog after this
            training period as these are issues that require long term commitments
            and are not guaranteed to be fixed in the three week time frame.
        </p>
        <Form.TextArea label='Additional Issues' placeholder='Note any additional issues or concerns that you want us to work on while in the training.' />
        <Form.TextArea label='Known Commands' placeholder='Please list all commands your dog knows and what they do for this command.' />
        <p>
            These are the advanced commands we will teach your pup unless the *
            issues above affect us doing so. Remember all these should be commands you 
            will continue to use and work on (what you don't use you will lose). 
            Check which two are most important to you? We will focus on these the most.
        </p>
        <Form.Group widths='equal'>
            
        </Form.Group>
        <h2>SECTION B: GENERAL INFORMATION</h2>

        <Form.Group widths='equal'>
            <Form.Input fluid label='How many cups of food a day' />
            <Form.Input fluid label='Allergies' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='What time of day?' />
            <Form.Input fluid label='What kind of toys will you bring?' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='What kind of food?' />
            <Form.Input fluid label='Medication?' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='How much medication and when(bring enough for 3 weeks)?' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Medical Issues?' />
            <Form.Select
            fluid
            label='2016 dog flu'
            options={yesNo}
            />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Select
            fluid
            label='Is your dog spayed or neutered?'
            options={yesNo}
            />
            <Form.Input fluid label='Age when dog was fixed' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Date of last heat cycle (ONLY FOR NOT SPAYED FEMALES)' type='date' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Name of Vet' />
            <Form.Input fluid label='Vet Phone Number' placeholder ='555-555-5555'/>
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Select
            fluid
            label='Is your dog on Heartworm/Flea medication?'
            options={yesNo}
            />
            <Form.Input fluid label='What kind and last dose' />
        </Form.Group>
        <p>
            Please bring food for 3 weeks plus extra. We suggest your pup's 
            favorite toy, dog bed, or blanket for a little bit of home. You 
            will receive daily picture updates, and video updates every few 
            days from me but you can always contact us to see how your dog 
            is doing. These updates will be through a Dropbox link.
        </p>
        <h2>SECTION C: NOTES</h2>
        <Form.Input fluid placeholder='Add extra comments'/>
        <h2>SECTION D: HOW DID YOU HEAR ABOUT US?</h2>
        <Form.Input fluid placeholder='e.i. Google Search, a friend, etc...' />
        <h2>SECTION E: OWNER INFO</h2>
        <Form.Group widths='equal'>
            <Form.Input fluid label='First Name' placeholder='First Name' />
            <Form.Input fluid label='Last Name' placeholder='Last Name' />
            <Form.Input fluid label='Email' placeholder='example@email.com' />
            <Form.Input fluid label='Cell Phone' placeholder ='555-555-5555' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Address' placeholder='Address' />
            <Form.Input fluid label='City' placeholder='City' />
            <Form.Select
            fluid
            label='State'
            options={states}
            placeholder='State'
            />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Zip Code' placeholder ='55555' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Emergency Contact First Name' placeholder='First Name' />
            <Form.Input fluid label='Emergency Contact Last Name' placeholder='Last Name' />
            <Form.Input fluid label='Cell Phone' placeholder ='555-555-5555' />
        </Form.Group>
        <p>***There will be a 1-3hr go-home lesson with us on go-home 
            day. We will be going over everything that they have learned. 
            This will be followed by a three week follow up program that 
            we will have you follow. This is your time to work your pup and 
            go through the learning process and rebuild a new relationship 
            with your pup. During this time your dog will be on leash at all 
            times until you are 110% sure that you are confident in working 
            the tools and your dog with the distractions in the environment 
            you are in. We are here for every step and you have three follow 
            ip sessions one each week as you need them. Your pup will spend three 
            weeks learning with us, so we want to make sure you have the time after 
            they come home to spend that time learning your new relationship with 
            them.***
        </p>
        <p>Please let me know if there will be any time you will be away from 
            your pup fpr the first four weeks after training this can affect 
            training and we will need to make arrangements with you and your 
            pup!
        </p>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button>Submit</Button>
    </Form>
)