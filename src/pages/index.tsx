import type { NextPage } from 'next'
import {
    generateRandomWord,
    generateShiftedWord,
    Letters,
    Mutator,
} from '@/components/spread-letters'

const Home: NextPage = () => {
    return (
        <main className='grid h-full grid-cols-1 grid-rows-3 place-items-center px-8'>
            <span className='row-start-2 w-full max-w-2xl'>
                <Header />
                <br />
                <hr />
                <br />
                <section
                    id='characteristics'
                    className='animate-characteristics_entry text-center opacity-0 mobile:text-sm'
                >
                    <i>
                        Professionally curious software engineer and problem
                        solver
                    </i>
                </section>
            </span>
        </main>
    )
}

export default Home

function Header() {
    const lettersProps: { mutator: Mutator } = {
        mutator: {
            mutationLogic: generateRandomWord,
            iterates: true,
            initialMutation: generateShiftedWord,
        },
    }
    return (
        <div
            id='header-content'
            className='w-full font-hacker justify-items-center text-hero font-bold uppercase leading-none'
        >
            <Letters word='connor' {...lettersProps} />
            <Letters word='williams' {...lettersProps} />
        </div>
    )
}
