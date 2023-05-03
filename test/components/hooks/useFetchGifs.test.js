import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
  
    test('Debe de regresar el estado inicial del hook', () => {
      
        const {result} = renderHook(() => useFetchGifs('nezuko'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe de retornar un arreglo de imagenes e isloading en false', async() => {
      
        const {result} = renderHook(() => useFetchGifs('nezuko'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        // const {images, isLoading} = result.current;
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
    

})
