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

#include <map>
#include <stdexcept>
#include <string>

#include "note.hpp"
#include "notes_repository.hpp"

NotesRepository::NotesRepository() {}

NotesRepository::~NotesRepository() {}

Note* NotesRepository::create_note(std::string id) {
    if (notes.count(id) != 0) {
        auto msg = "note with id = " + id + " already exists";
        throw std::invalid_argument(msg);
    }
    
    auto note = new Note(id);
    notes.insert({id, note});
    
    return note;
}

Note* NotesRepository::get_note(std::string id) {
    if (notes.count(id) == 0) {
        auto msg = "note with id = " + id + " not found";
        throw std::invalid_argument(msg);
    }
    
    return notes.at(id);
}
