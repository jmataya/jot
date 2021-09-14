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

#ifndef jot_notes_hpp
#define jot_notes_hpp

#include <string>

class Note
{
public:
    Note(std::string id_) : id(id_), contents("") {}
    ~Note() {}
    
    std::string get_contents() {
        return contents;
    }
    
    std::string get_id() {
        return id;
    }
    
    void set_contents(std::string contents_) {
        contents = contents_;
    }
    
private:
    std::string contents;
    std::string id;
};

#endif /* jot_notes_hpp */

