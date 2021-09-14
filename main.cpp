//  Jot - Simple, Fast, and Beautiful Notes
//  Copyright (C) 2021  Jeffrey Mataya
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

#include <iostream>

#include "lib/notes_repository.hpp"

using namespace std;

int main(int argc, const char * argv[]) {
    auto repo = new NotesRepository();
    auto note = repo->create_note("123");
    note->set_contents("I am a meat popsicle");
    
    cout << "Created a note: " << note->get_id() << endl;
    cout << "Contents: " << note->get_contents() << endl;
    
    return 0;
}
