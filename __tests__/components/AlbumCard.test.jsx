/* eslint-disable no-undef */
import { AlbumCard } from "../../src/components/AlbumCard"
import { render } from "@testing-library/react"

describe('Tests in <AlbumCard />' , () => {

    test('Should be equal to snapshot', () =>{
        render(<AlbumCard />)
    })

})