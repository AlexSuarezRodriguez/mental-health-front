/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './Button/button';

function Searchdoctor() {
  return (
    <div>
      <form action="#" method="post" target="_blank">
        <fieldset>
          <label htmlFor="search">Encuentra a tu especialista...</label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Nombre, ciudad, especialidad..."
          />
          <Button className="btn-search" type="submit" name="Search" />

        </fieldset>
      </form>
    </div>
  );
}

export default Searchdoctor;
