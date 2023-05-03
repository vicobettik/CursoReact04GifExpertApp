import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
  
    test('Debe de cambiar el valor de la caja de texto', () => {
      
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target:{value:'saitama'}});
        expect(input.value).toBe('saitama');
        // screen.debug();

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
      const inputValue = 'saitama';

      const onNewCategory = jest.fn();

      render(<AddCategory onNewCategory={onNewCategory}/>);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, {target:{value: inputValue}});
      fireEvent.submit(form);

      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    //   expect(onNewCategory).toHaveBeenCalledTimes(1);
    //   expect(onNewCategory).toHaveBeenCalled();
    })

    test('No ebe de llamar onNewCategory si el input tiene un valor', () => {
                const onNewCategory = jest.fn();
  
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
  
        // screen.debug()
        expect(onNewCategory).not.toHaveBeenCalled();
      })
    

    

})
