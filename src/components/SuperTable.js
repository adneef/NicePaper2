import React from 'react'

const SuperSchedule = () => {
  return (

    /* has not been reactified yet */

    <table id="superSchedule">
      <tr className = "text-center">
        <th className = "col-lg-auto text-center">account.id</th>
        <th className = "col-lg-auto text-center">email</th>
        <th className = "col-lg-auto text-center">firstName1</th>
        <th className = "col-lg-auto text-center">lastName1</th>
        <th className = "col-lg-auto text-center">firstName2</th>
        <th className = "col-lg-auto text-center">lastName2</th>
        <th className = "col-lg-auto text-center">weddingDate</th>
        <th className = "col-lg-auto text-center">account_id</th>
        <th className = "col-lg-auto text-center">role</th>
        <th className = "col-lg-auto text-center">template_id</th>
        <th className = "col-lg-auto text-center">created_at</th>
        <th className = "col-lg-auto text-center">updated_at</th>
      </tr>

      <% for (let i = 0; i < data.length; i++) { %>
        <tr className = "text-center">
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
      <% } %>
    </table>

  )
}


export default SuperSchedule
