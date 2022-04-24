import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-new-signin',
  templateUrl: './new-signin.component.html',
  styleUrls: ['./new-signin.component.scss']
})
export class NewSigninComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
  signInForm: FormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _authService: AuthService,
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _dataService: DataService
  )
  {
  }

  ngOnInit(): void
  {
      //----------------------------------------------------------------
      // CHANGE THIS VARIABLE TO 'Y' WHEN MOVING TO PRODUCION 
      // CHANGE THIS VARIABLE TO 'N' WHEN IN DEVELOPMENT AND TESTING
      //----------------------------------------------------------------
      let production='N'
      localStorage.setItem('uid','55009')
      localStorage.setItem('role','CMOD')
      this._router.navigateByUrl('/sadmin'); 
      location.replace('/#/sadmin');
 }
          
}
