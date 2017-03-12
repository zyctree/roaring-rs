var searchIndex = {};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
searchIndex["roaring"] = {"doc":"This is a [Rust][] port of the [Roaring bitmap][] data structure, initially\ndefined as a [Java library][roaring-java] and described in [_Better bitmap\nperformance with Roaring bitmaps_][roaring-paper].","items":[[0,"bitmap","roaring","A compressed bitmap using the [Roaring bitmap compression scheme](http://roaringbitmap.org).",null,null],[3,"Iter","roaring::bitmap","An iterator for `RoaringBitmap`.",null,null],[3,"IntoIter","","An iterator for `RoaringBitmap`.",null,null],[3,"RoaringBitmap","","A compressed bitmap using the [Roaring bitmap compression scheme](http://roaringbitmap.org).",null,null],[11,"fmt","","",0,null],[11,"new","","Creates an empty `RoaringBitmap`.",0,{"inputs":[],"output":{"name":"roaringbitmap"}}],[11,"insert","","Adds a value to the set. Returns `true` if the value was not already present in the set.",0,null],[11,"remove","","Removes a value from the set. Returns `true` if the value was present in the set.",0,null],[11,"contains","","Returns `true` if this set contains the specified integer.",0,null],[11,"clear","","Clears all integers in this set.",0,null],[11,"is_empty","","Returns `true` if there are no integers in this set.",0,null],[11,"len","","Returns the number of distinct integers added to the set.",0,null],[11,"min","","Returns the minimum value in the set (if the set is non-empty).",0,null],[11,"max","","Returns the maximum value in the set (if the set is non-empty).",0,null],[11,"default","","",0,{"inputs":[],"output":{"name":"roaringbitmap"}}],[11,"next","","",1,null],[11,"size_hint","","",1,null],[11,"next","","",2,null],[11,"size_hint","","",2,null],[11,"iter","","Iterator over each value stored in the RoaringBitmap, guarantees values are ordered by value.",0,null],[11,"into_iter","","",0,null],[11,"from_iter","","",0,{"inputs":[{"name":"i"}],"output":{"name":"roaringbitmap"}}],[11,"extend","","",0,null],[11,"union_with","","Unions in-place with the specified other bitmap.",0,null],[11,"intersect_with","","Intersects in-place with the specified other bitmap.",0,null],[11,"difference_with","","Removes all values in the specified other bitmap from self, in-place.",0,null],[11,"symmetric_difference_with","","Replaces this bitmap with one that is equivalent to `self XOR other`.",0,null],[11,"bitor","","",0,null],[11,"bitor","","",0,null],[11,"bitor_assign","","",0,null],[11,"bitor_assign","","",0,null],[11,"bitand","","",0,null],[11,"bitand","","",0,null],[11,"bitand_assign","","",0,null],[11,"bitand_assign","","",0,null],[11,"sub","","",0,null],[11,"sub","","",0,null],[11,"sub_assign","","",0,null],[11,"sub_assign","","",0,null],[11,"bitxor","","",0,null],[11,"bitxor","","",0,null],[11,"bitxor_assign","","",0,null],[11,"bitxor_assign","","",0,null],[11,"is_disjoint","","Returns true if the set has no elements in common with other. This is equivalent to\nchecking for an empty intersection.",0,null],[11,"is_subset","","Returns `true` if this set is a subset of `other`.",0,null],[11,"is_superset","","Returns `true` if this set is a superset of `other`.",0,null],[11,"serialize_into","","Serialize this bitmap into [the standard Roaring on-disk format][format].\nThis is compatible with the official C/C++, Java and Go implementations.",0,null],[11,"deserialize_from","","Deserialize a bitmap into memory from [the standard Roaring on-disk\nformat][format].  This is compatible with the official C/C++, Java and\nGo implementations.",0,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[0,"treemap","roaring","A compressed bitmap with u64 values.  Implemented as a `BTreeMap` of `RoaringBitmap`s.",null,null],[3,"Iter","roaring::treemap","An iterator for `RoaringTreemap`.",null,null],[3,"IntoIter","","An iterator for `RoaringTreemap`.",null,null],[3,"RoaringTreemap","","A compressed bitmap with u64 values.\nImplemented as a `BTreeMap` of `RoaringBitmap`s.",null,null],[11,"fmt","","",3,null],[11,"new","","Creates an empty `RoaringTreemap`.",3,{"inputs":[],"output":{"name":"roaringtreemap"}}],[11,"insert","","Adds a value to the set. Returns `true` if the value was not already present in the set.",3,null],[11,"remove","","Removes a value from the set. Returns `true` if the value was present in the set.",3,null],[11,"contains","","Returns `true` if this set contains the specified integer.",3,null],[11,"clear","","Clears all integers in this set.",3,null],[11,"is_empty","","Returns `true` if there are no integers in this set.",3,null],[11,"len","","Returns the number of distinct integers added to the set.",3,null],[11,"min","","Returns the minimum value in the set (if the set is non-empty).",3,null],[11,"max","","Returns the maximum value in the set (if the set is non-empty).",3,null],[11,"default","","",3,{"inputs":[],"output":{"name":"roaringtreemap"}}],[11,"next","","",4,null],[11,"size_hint","","",4,null],[11,"next","","",5,null],[11,"size_hint","","",5,null],[11,"iter","","Iterator over each value stored in the RoaringBitmap, guarantees values are ordered by\nvalue.",3,null],[11,"into_iter","","",3,null],[11,"from_iter","","",3,{"inputs":[{"name":"i"}],"output":{"name":"roaringtreemap"}}],[11,"extend","","",3,null],[11,"union_with","","Unions in-place with the specified other bitmap.",3,null],[11,"intersect_with","","Intersects in-place with the specified other bitmap.",3,null],[11,"difference_with","","Removes all values in the specified other bitmap from self, in-place.",3,null],[11,"symmetric_difference_with","","Replaces this bitmap with one that is equivalent to `self XOR other`.",3,null],[11,"bitor","","",3,null],[11,"bitor","","",3,null],[11,"bitor_assign","","",3,null],[11,"bitor_assign","","",3,null],[11,"bitand","","",3,null],[11,"bitand","","",3,null],[11,"bitand_assign","","",3,null],[11,"bitand_assign","","",3,null],[11,"sub","","",3,null],[11,"sub","","",3,null],[11,"sub_assign","","",3,null],[11,"sub_assign","","",3,null],[11,"bitxor","","",3,null],[11,"bitxor","","",3,null],[11,"bitxor_assign","","",3,null],[11,"bitxor_assign","","",3,null],[11,"is_disjoint","","Returns true if the set has no elements in common with other. This is equivalent to\nchecking for an empty intersection.",3,null],[11,"is_subset","","Returns `true` if this set is a subset of `other`.",3,null],[11,"is_superset","","Returns `true` if this set is a superset of `other`.",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"clone","","",3,null]],"paths":[[3,"RoaringBitmap"],[3,"Iter"],[3,"IntoIter"],[3,"RoaringTreemap"],[3,"Iter"],[3,"IntoIter"]]};
initSearch(searchIndex);
