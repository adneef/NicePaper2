import React from 'react'

const SuperTableItem = () => {
  return (
    <tr>
      <td className = "col-lg-auto text-center"><%= data[i].id %></td>
      <td className = "col-lg-auto text-center"><%= data[i].email %></td>
      <td className = "col-lg-auto text-center"><%= data[i].first_name_1 %></td>
      <td className = "col-lg-auto text-center"><%= data[i].last_name_1 %></td>
      <td className = "col-lg-auto text-center"><%= data[i].first_name_2 %></td>
      <td className = "col-lg-auto text-center"><%= data[i].last_name_2 %></td>
      <td className = "col-lg-auto text-center"><%= data[i].wedding_date %></td>
      <td className = "col-lg-auto text-center"><%= data[i].account_id %></td>
      <td className = "col-lg-auto text-center"><%= data[i].role %></td>
      <td className = "col-lg-auto text-center"><%= data[i].template_id %></td>
      <td className = "col-lg-auto text-center"><%= data[i].created_at %></td>
      <td className = "col-lg-auto text-center"><%= data[i].updated_at %></td>

      <td><a href="/schedule/<%= data[i].id %>/edit"><button style="display:none" className="edit" type="button" name="button" id="<%= data[i].id %>">edit</button></a>
        <button className="delete" type="button" name="button" id="<%= data[i].id %>">delete</button>
        <a href=""><button style="display:none" className="userSched" type="button" name="button" id="<%= data[i].id %> ">Get this user's schedule</button></a>
      </td>
    </tr>

  )
}


export default SuperTableItem
