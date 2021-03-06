import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { ProfileService } from "src/app/services/profile.service";
import { AlertController } from "@ionic/angular";
import { UserProfile } from "src/app/models/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  public userProfile: UserProfile;
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.profileService.getUserProfile().then((profile$) => {
      profile$.subscribe((userProfile) => {
        this.userProfile = userProfile;
      });
    });
  }

  async logOut(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl("login");
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: "Kullanıcı Adı",
      inputs: [
        {
          type: "text",
          name: "fullName",
          placeholder: "Ad Soyad",
          value: this.userProfile.fullName,
        },
      ],
      buttons: [
        { text: "İptal" },
        {
          text: "Kaydet",
          handler: (data) => {
            this.profileService.updateName(data.fullName);
          },
        },
      ],
    });
    return await alert.present();
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: "text", name: "newEmail", placeholder: "Yeni E-mail " },
        { name: "password", placeholder: "Şifre", type: "password" },
      ],
      buttons: [
        { text: "İptal" },
        {
          text: "Kaydet",
          handler: (data) => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log("E-posta Başarıyla Değiştirildi");
              })
              .catch((error) => {
                console.log("ERROR: " + error.message);
              });
          },
        },
      ],
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: "newPassword", placeholder: "Yeni Şifre", type: "password" },
        { name: "oldPassword", placeholder: "Eski Şifre", type: "password" },
      ],
      buttons: [
        { text: "İptal" },
        {
          text: "Kaydet",
          handler: (data) => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          },
        },
      ],
    });
    return await alert.present();
  }
}
